import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios'

import AuthService from '../../_services/AuthService';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import './SignIn_SignUp.scss'

import styled from 'styled-components'

  const CustomButton = styled.button`
  position: 'relative';
  width:100% ;
  height: 45px;
  left: 46px;
  pointer: cursor;
  background: #446E7B;
  border-radius: 20px;
  color: #fff;
  border: none;
  `;

const ValidationMessage = (props) => {
    if (!props.valid) {
      return(
        <div style={{color: 'red'}}>{props.message}</div>
      )
    }
    return null;
}

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            type: 'text',
            emailValid: false,
            passwordValid: false,
            loggedIn: false,
            loading: false,
            error: false,
            isPasswordShown: false,
            errorMsg: {}
        };
        this.showHide = this.showHide.bind(this)
    }

    togglePasswordVisiblity = () => {
      const { isPasswordShown } = this.state;
      this.setState({ isPasswordShown: !isPasswordShown });
    };

    validateForm = () => {
        const {emailValid, passwordValid} = this.state;
        this.setState({
          formValid: emailValid && passwordValid
        })
    }

    updateEmail = (email) => {
        this.setState({email}, this.validateEmail)
    }

      validateEmail = () => {
        const {email} = this.state;
        let emailValid = true;
        let errorMsg = {...this.state.errorMsg}

        // checks for format _@_._
        if (!email){
          errorMsg.email = "Required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
          emailValid = false;
          errorMsg.email = 'Invalid email format'
        }

        this.setState({emailValid, errorMsg}, this.validateForm)
    }

    updatePassword = (password) => {
        this.setState({password}, this.validatePassword);
    }

      validatePassword = () => {
        const {password} = this.state;
        let passwordValid = true;
        let errorMsg = {...this.state.errorMsg}

        // must be 6 chars
        // must contain a number
        // must contain a special character

        if (!password) {
          errorMsg.password = 'Required';
        }else if(password.length < 6){
          passwordValid = false;
          errorMsg.password = 'Password must be at least 6 characters long';
        }else if (!/\d/.test(password)){
          passwordValid = false;
          errorMsg.password = 'Password must contain a digit';
        } else if (!/[!@#$%^&*]/.test(password)){
          passwordValid = false;
          errorMsg.password = 'Password must contain special character: !@#$%^&*';
        }

        this.setState({passwordValid, errorMsg}, this.validateForm);
      }

      showHide = () => this.setState(({type}) => ({
        type: type === 'text' ? 'password' : 'text'
      }))

      handleSubmit = res => {
        res.preventDefault();
        // const loginResponse = {
        //   email: res.email,
        //   password: res.password
        // }
        // debugger;
          // axios.post('http://localhost:60200/Api/Login/SocialmediaData', loginResponse)
          //   .then((result) => {
          //     let responseJson = result;
          //     console.log(result.data.name);
          //     alert("data");
          //     sessionStorage.setItem("userData", JSON.stringify(result));
          //     this.props.history.push('/dashboard/default')
          //   });
        // this.props.history.push('/dashboard/default')
        // this.props.history.push('/dashboard/')
        // console.log(loginResponse)
        const { email, password } = this.state;
        const user = {
          email,
          password
        }
        const { history } = this.props;


        this.setState({ error: false });

        if (!(email === 'demo@kejacop.com' && password === 'demo001@')) {
          return this.setState({ error: true });
        }

        localStorage.setItem('user', JSON.stringify(user));

        history.push('/dashboard');
        console.log("hi")
      }

        render(){
            // const { values } = this.state;

        return(
          <Aux>
          <Breadcrumb/>
          <div className="auth-wrapper">
              <div className="auth-content">

                  <div className="card" style={{borderRadius:20,}}>
                      <div className="card-body text-center">
                          <div className="mb-4">
                              <i className="feather icon-unlock auth-icon"/>
                          </div>
                          <h3 className="mb-4">Login</h3>
                         <form >

                            <div className="input-group mb-3">
                                <ValidationMessage valid={this.state.emailValid} message={this.state.errorMsg.email} />
                                <TextField type="email" id="email" label="Email" placeholder="demo@kejacop.co.ke" value={this.state.email} onChange={(e) => this.updateEmail(e.target.value)} fullWidth />
                            </div>
                            <div className="input-group mb-4 wrap-input100">
                                <ValidationMessage valid={this.state.passwordValid} message={this.state.errorMsg.password} />
                                <TextField type={this.state.isPasswordShown ? "text" : "password"} id="password" placeholder="demo001@" label="Password" value={this.state.password} onChange={(e) => this.updatePassword(e.target.value)} fullWidth />
                                <i className="fa fa-eye password-eye" onClick={this.togglePasswordVisiblity} />
                            </div>
                            <br />
                            <div className="form-group text-left">
                              <div className="checkbox checkbox-fill d-inline">
                                  <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" />
                                  <label htmlFor="checkbox-fill-a1" className="cr"> Save credentials</label>
                              </div>
                          </div>
                          <CustomButton onClick={this.handleSubmit} shadow-2>
                          Login
                          </CustomButton>
                          <br /><br />
                         </form>
                           </div>
                  </div>
              </div>
          </div>
      </Aux>
        );
        }
    }

export default SignIn;
