import React, { useEffect, useMemo, useState } from 'react'
import AppHeader from '@/components/layout/AppHeader'
import { AUTH_ROUTES, ROUTES } from '@/lib/variables/routes'
import { observer } from 'mobx-react'
import PageLoader from '@/components/contents/PageLoader'
import { useStore } from '@/stores'
import { Link, useLocation } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty'
import cx from 'classnames'
import './AppWrapper.scss'
import axios from 'axios'

const authPaths = Object.values(AUTH_ROUTES).map((route) => route.path)

interface Props {
  children: React.ReactNode
}

function AppWrapper({ children }: Props) {
  const location = useLocation()
  const { rootStore } = useStore()
  const { loading, setLoading } = rootStore

  const [headerHeight, setHeaderHeight] = useState<number>(0)
  const [isShowNav, setIsShowNav] = useState(false)
  const onToggleNav = () => setIsShowNav((prevShow) => !prevShow)

  const isAuthPage = useMemo(() => {
    // hide navigation
    if (isShowNav) {
      setIsShowNav(false)
    }

    return authPaths.includes(location.pathname)
  }, [location.pathname])

  function setAxiosLoading() {
    axios.interceptors.request.use(
      function (config) {
        setLoading(true)
        return config
      },
      function (error) {
        setLoading(false)
        return Promise.reject(error)
      },
    )

    axios.interceptors.response.use(
      function (response) {
        setLoading(false)
        return response
      },
      function (error) {
        setLoading(false)
        return Promise.reject(error)
      },
    )
  }

  useEffect(function onMount() {
    setAxiosLoading()

    const $header = document.querySelector('.tbfe-app-header') as HTMLElement
    if ($header) setHeaderHeight($header.offsetHeight || 0)
  }, [])

  return !isAuthPage ? (
    <>
      <AppHeader onToggleNav={onToggleNav} />
      <div className="tbfe-app container-fluid">
        <div className="row">
          <nav className={cx('col-md-3 col-lg-2 d-md-block bg-light sidebar collapse tbfe-app-nav', { show: isShowNav })}>
            <div className="sidebar-sticky pt-3">
              <ul className="nav flex-column">
                {Object.values(ROUTES).map((route) => {
                  const { children } = route

                  if (!isEmpty(children)) {
                    const childList = Object.values(children || {})
                    const hasActive = childList.some((child) => location.pathname === child.path)

                    return (
                      <React.Fragment key={route.path || route.title}>
                        {route.title && (
                          <>
                            <TBNavLink path={route.path || childList[0].path} title={route.title} active={hasActive} />
                            {childList.map((child) => (
                              <TBNavLink
                                className="pl-3"
                                path={child.path}
                                title={child.title}
                                active={location.pathname === child.path}
                                key={child.path || route.title}
                              />
                            ))}
                          </>
                        )}
                      </React.Fragment>
                    )
                  }

                  return route.title ? (
                    <TBNavLink path={route.path} title={route.title} active={location.pathname === route.path} key={route.path || route.title} />
                  ) : null
                })}
              </ul>
            </div>
          </nav>
          <main
            role="main"
            className="tbfe-app-main pt-3 col-md-9 ml-sm-auto col-lg-10 p-md-4"
            style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
          >
            <PageLoader active={loading} />
            {children}
          </main>
        </div>
      </div>
    </>
  ) : (
    <div className="tbfe-app-simple">{children}</div>
  )
}

interface TBNavLinkProps {
  className?: string
  active?: boolean
  path?: string
  title?: string
}

function TBNavLink({ className = '', active = false, path = '', title = '' }: TBNavLinkProps) {
  return (
    <li className={cx('nav-item', className)}>
      <Link to={path} className={cx('nav-link', { active })}>
        {title}
      </Link>
    </li>
  )
}

export default observer(AppWrapper)
