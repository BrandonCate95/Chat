import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../Loading'

const LoadableButton = Loadable({
    loader: () => import('../mdc/Button'),
    loading: Loading,
})

const About = () => (
    <div>
        This page will explain exactly what this web app does.
        This is the about page: about me!
        <LoadableButton>Hello!</LoadableButton>
    </div>
)

export default About