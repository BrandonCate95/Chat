import React from 'react'

const About = () => (
    <div>
        <div>
            This app was started as a project to test out server side rendering.
            It currently achieves this by using react apollo, react loadable, and react router.
        </div>
        <br />
        <div>
            The app also uses a custom webpack configuration for optimal control and speed.
            You can view both the server side rendering and the effects of the webpack configuration best through the network tab in the developer tools.
        </div>
        <br />
        <div>
            The last smaller part of the app is the real time messaging using graphQL subscriptions.
            You can view this by either opening up two tabs or using two devices and sending a few messages.
        </div>
        <br />
        <div>
            This app is hosted on a small server in ohio using aws elasticbeanstalk.
        </div>
    </div>
)

export default About