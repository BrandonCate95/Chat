import React from 'react'
import Loadable from 'react-loadable'
import Loading from './Loading'

const LoadableHome = Loadable({
    loader: () => import('./pages/Home'),
    loading: Loading
})

const LoadableAbout = Loadable({
    loader: () => import('./pages/About'),
    loading: Loading
})

const LoadableContact = Loadable({
    loader: () => import('./pages/Contact'),
    loading: Loading
})

export default [
    {
        path: "/",
        render: (props) => <LoadableHome {...props} />,
        exact: true,
    },
    {
        path: "/About",
        render: (props) => <LoadableAbout {...props} />,
        exact: true,
    },
    {
        path: "/Contact",
        render: (props) => <LoadableContact {...props} />,
        exact: true,
    },
];
