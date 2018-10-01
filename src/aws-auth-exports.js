export default {

    // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
    identityPoolId: 'us-east-2:c5a83970-8530-47cb-92cb-c19d012306e7',
    
    // REQUIRED - Amazon Cognito Region
    region: 'us-east-2',

    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'us-east-2_RCEc2tpEX',

    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: '2d1ak5rr461vfms0s1date7f7s',

    // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
    mandatorySignIn: false,

    // OPTIONAL - Configuration for cookie storage
    cookieStorage: {
    // REQUIRED - Cookie domain (only required if cookieStorage is provided)
        domain: '127.0.0.1',
    // OPTIONAL - Cookie path
        path: '/',
    // OPTIONAL - Cookie expiration in days
        expires: 365,
    // OPTIONAL - Cookie secure flag
        // secure: true
    },

    // OPTIONAL - customized storage object
    // storage: new MyStorage(),
}