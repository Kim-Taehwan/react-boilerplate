import React from 'react'
import * as pages from '@/pages'
import { Redirect, RouteProps } from 'react-router-dom'

interface Route extends Pick<RouteProps, 'component' | 'render'> {
  title?: string
  path?: string
  children?: HashMap<Route>
  exact?: boolean
}

// hide header, navigation
export const AUTH_ROUTES: HashMap<Route> = {
  login: {
    path: '/login',
    exact: true,
    component: pages.Login,
  },
  signup: {
    path: '/signup',
    exact: true,
    component: pages.Signup,
  },
}

export const ROUTES: HashMap<Route> = {
  ...AUTH_ROUTES,
  main: {
    path: '/',
    exact: true,
    // Set the redirect url OR page component
    render: () => <Redirect to="/exp/comp" />,
    // component: pages.Dashboard,
  },
  exp: {
    title: '디자인 예시',
    children: {
      comp: {
        path: '/exp/comp',
        exact: true,
        title: '컴포넌트(BS 4.6)',
        component: pages.Comp,
      },
      icon: {
        path: '/exp/icon',
        exact: true,
        title: '아이콘(Material)',
        component: pages.Icon,
      },
    },
  },
  item: {
    title: 'API 예시',
    children: {
      itemList: {
        path: '/exp/mobx',
        exact: true,
        title: 'mobx 사용 예시',
        component: pages.Magazines,
      },
    },
  },
}
