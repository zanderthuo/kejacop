import { LoginActionTypes } from '../types/LoginTypes';

import { UserServices } from '../../../services/UserService';
import { history } from '../../../helpers/History';
import { alertActions } from './Alert.actions'; 

export const LoginActions = {
    login,
    logout,
};

function login(email, password){
    return dispatch => {
        dispatch(request({ email }));

        UserServices.login(email, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: LoginActionTypes.LOGIN_REQUEST, user } }
    function success(user) { return { type: LoginActionTypes.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: LoginActionTypes.LOGIN_FAILURE, error } }
}


function logout(){
    UserServices.logout();
    return { type: LoginActionTypes.LOGOUT };
}