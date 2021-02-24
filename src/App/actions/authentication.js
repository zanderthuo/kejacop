import axios from 'axios';
import AuthService from '../_services/AuthService';

import { useHistory } from 'react-router-dom'

import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE

} from './types'


/**
* Authentication Actions
*/

export const register = (user) => dispatch => {
    // console.log('user')
    var data = {
      national_id: this.state.national_id,
      email:this.state.email,
      password: this.state.password,
      first_name:this.state.first_name,
      last_name:this.state.last_name,
      mobilenumber: this.state.mobilenumber,
      occupation: this.state.occupation,
      account: this.state.account
    }

    console.log(data)
    AuthService.register('http://127.0.0.1:5000/users',)
      .then(user => {
        this.setState({
          national_id: user.data.national_id,
          email:user.data.email,
          password: user.data.password,
          first_name:user.data.first_name,
          last_name:user.data.last_name,
          mobilenumber: user.data.mobilenumber,
          occupation: user.data.occupation,
          account: user.data.account
        });
        console.log(user)
        // dispatch(registerSuccess());
        dispatch({
          type: REGISTER_REQUEST,
          payload: user
        });
        useHistory.push('/login');
        console.log(user)
      })
      .catch (error => {
        // dispatch(registerFailure(error.toString()));
        console.log(error)
      });
    console.log('hello')
}

export const login = (email, password) => dispatch => {
  console.log('user')

  const { email, password } = this.state;
  const user = {
    email,
    password
  }
  const { history } = this.props;

    axios.get('http://127.0.0.1:5000/users',email, password)
      .then(user => {
        // dispatch(registerSuccess());
        dispatch({
          type: LOGIN_SUCCESS,
          payload: user
        });
        // useHistory.push('/login');
        // console.log(user)
        localStorage.setItem('user', JSON.stringify(user));

        history.push('/dashboard/');
        console.log("hi")

      })
      .catch (error => {
        // dispatch(registerFailure(error.toString()));
        console.log(error)
      });



        // if (!(email === 'zanderthuo@gmail.com' && password === 'qwerty00@')) {
        //   return this.setState({ error: true });
        // }
        //
        // localStorage.setItem('user', JSON.stringify(user));
        //
        // useHistory.push('/dashboard/');
        // console.log("hi")
}


const registerRequest = () => ({
 type: REGISTER_REQUEST,
});

const registerSuccess = () => ({
 type: REGISTER_SUCCESS,
});

const registerFailure = () => ({
 type: REGISTER_FAILURE,
});

const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
})

const loginFailure = () => ({
  type: LOGIN_FAILURE,
})
