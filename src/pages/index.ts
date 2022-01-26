import React from 'react'

export { default as Login } from './Login/Login'
export const Signup = React.lazy(() => import('./Signup/Signup'))

export const Comp = React.lazy(() => import('./Designs/Comp'))
export const Icon = React.lazy(() => import('./Designs/Icon'))

export const Magazines = React.lazy(() => import('./Magazine/List'))
