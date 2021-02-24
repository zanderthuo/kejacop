import React from 'react';

const SignIn = React.lazy(() => import('../src/App/components/SignIn_SIgnUp/SignIn'));
const SignUp = React.lazy(() => import('../src/App/components/SignIn_SIgnUp/SignUp'));


const route = [
    { path: '/signin', exact: true, name: 'Sign In', component: SignIn },
    { path: '/signup', exact: true, name: 'Sign Up', component: SignUp },

];

export default route;
