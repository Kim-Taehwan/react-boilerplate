import React, { Suspense } from 'react'
import { ROUTES } from '@/lib/variables/routes'
import { StoreProvider } from '@/stores'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PageLoader from '@/components/contents/PageLoader'
import NotFound from '@/components/NotFound'
import AppWrapper from '@/components/layout/AppWrapper'
import isEmpty from 'lodash/isEmpty'

function App() {
  return (
    <BrowserRouter>
      <StoreProvider>
        <AppWrapper>
          <Suspense fallback={<PageLoader active />}>
            <Switch>
              {Object.values(ROUTES).map((route) => {
                const { children } = route

                if (!isEmpty(children)) {
                  return Object.values(children || {}).map((child) => {
                    const { component, render, exact, path } = child
                    return <Route path={path} exact={exact} key={path} component={component} render={render} />
                  })
                }

                const { component, exact, path, render } = route
                return <Route path={path} exact={exact} key={path} component={component} render={render} />
              })}

              {/* 404 */}
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </AppWrapper>
      </StoreProvider>
    </BrowserRouter>
  )
}

export default App
