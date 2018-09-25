import React from 'react'
// import Button from '../mdc/Button'
import Loadable from 'react-loadable'
import Loading from '../Loading'

const LoadableButton = Loadable({
    loader: () => import('../mdc/Button'),
    loading: Loading,
})

const About = () => (
    <div>
        This is the about page: about me!
        <LoadableButton>Hello!</LoadableButton>
    </div>
)

export default About