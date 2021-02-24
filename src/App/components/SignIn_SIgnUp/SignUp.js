import React from 'react';
import axios from 'axios'
import AuthService from '../../_services/AuthService';
import {NavLink} from 'react-router-dom';

import {Col} from 'react-bootstrap'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import './SignIn_SignUp.scss'

import styled from 'styled-components'
import { red } from '@material-ui/core/colors';



  const CustomButton = styled.button`
  position: 'relative';
  width:100% ;
  height: 45px;
  left: 46px;

  background: #446E7B;
  border-radius: 20px;
  border: none;
  color: #fff;
  `;

const ValidationMessage = (props) => {
    if (!props.valid) {
      return(
        <div style={{color: 'red'}}>{props.message}</div>
      )
    }
    return null;
}

class SignUp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            national_id: '',
            email: '',
            password: '',
            passwordConfirm: '',
            first_name: '',
            last_name: '',
            mobilenumber: '',
            occupation: '',
            account: '',
            mobilenumberValid: false,
            emailValid: false,
            passwordValid: false,
            passwordConfirmValid: false,
            firstnameValid: false,
            lastnameValid: false,
            errorMsg: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    validateForm = () => {
        const {firstnameValid, lastnameValid, mobilenumberValid, emailValid, passwordValid, passwordConfirmValid} = this.state;
        this.setState({
          formValid: firstnameValid && lastnameValid && emailValid && mobilenumberValid && passwordValid && passwordConfirmValid
        })
    }

    updateNationalID = (national_id) => {
        this.setState({national_id})
    }

    updateOccupation = (occupation) => {
        this.setState({occupation})
    }

    updateAccount = (account) => {
        this.setState({account})
    }

    updateFirstname = (first_name) => {
        this.setState({first_name}, this.validateFirstname)
    }

    updateLastname = (last_name) => {
        this.setState({last_name}, this.validateLastname)
    }

    validateFirstname = () => {
        const {first_name} = this.state;
        let firstnameValid = true;
        let errorMsg = {...this.state.errorMsg}

        if (first_name.length < 3) {
          firstnameValid = false;
          errorMsg.first_name = 'Must be at least 3 characters long'
        }

        this.setState({firstnameValid, errorMsg}, this.validateForm)
    }

    validateLastname = () => {
        const {last_name} = this.state;
        let lastnameValid = true;
        let errorMsg = {...this.state.errorMsg}

        if (last_name.length < 3) {
          lastnameValid = false;
          errorMsg.last_name = 'Must be at least 3 characters long'
        }

        this.setState({lastnameValid, errorMsg}, this.validateForm)
    }

    updateEmail = (email) => {
        this.setState({email}, this.validateEmail)
    }

      validateEmail = () => {
        const {email} = this.state;
        let emailValid = true;
        let errorMsg = {...this.state.errorMsg}

        // checks for format _@_._
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
          emailValid = false;
          errorMsg.email = 'Invalid email format'
        }

        this.setState({emailValid, errorMsg}, this.validateForm)
    }

    updateMobilenumber = (mobilenumber) => {
        this.setState({mobilenumber}, this.validateMobilenumber)
    }

    validateMobilenumber = () => {
        const {mobilenumber} = this.state;
        let mobilenumberValid = true;
        let errorMsg = {...this.state.errorMsg}
        var pattern = new RegExp(/^[0-9\b]+$/)

        // checks for format _@_._
        if (!pattern.test(mobilenumber)){
          mobilenumberValid = false;
          errorMsg.mobilenumber = 'Invalid phonenumber'
        }

        this.setState({mobilenumberValid, errorMsg}, this.validateForm)
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

        if (password.length < 6) {
          passwordValid = false;
          errorMsg.password = 'Password must be at least 6 characters long';
        } else if (!/\d/.test(password)){
          passwordValid = false;
          errorMsg.password = 'Password must contain a digit';
        } else if (!/[!@#$%^&*]/.test(password)){
          passwordValid = false;
          errorMsg.password = 'Password must contain special character: !@#$%^&*';
        }

        this.setState({passwordValid, errorMsg}, this.validateForm);
      }

      updatePasswordConfirm = (passwordConfirm) => {
        this.setState({passwordConfirm}, this.validatePasswordConfirm)
      }

      validatePasswordConfirm = () => {
        const {passwordConfirm, password} = this.state;
        let passwordConfirmValid = true;
        let errorMsg = {...this.state.errorMsg}

        if (password !== passwordConfirm) {
          passwordConfirmValid = false;
          errorMsg.passwordConfirm = 'Passwords do not match'
        }

        this.setState({passwordConfirmValid, errorMsg}, this.validateForm);
      }


    handleSubmit = (e) => {
        e.preventDefault();

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

        AuthService.register(data)
         .then(res => {
             this.setState({
               national_id: res.data.national_id,
               email:res.data.email,
               password: res.data.password,
               first_name:res.data.first_name,
               last_name:res.data.last_name,
               mobilenumber: res.data.mobilenumber,
               occupation: res.data.occupation,
               account: res.data.account
             });
             // console.log(res.data)
             // console.log(data)
           })
           .catch(err => console.log(err));
      }

        render(){
        return(
          <Aux>
          <Breadcrumb/>
          <div>
          <div className="auth-wrapper">
            <div className="auth-content" md={6}>
              <div className="card" style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto',borderRadius:20,}}>
                    <div className="card-body text-center">
                        <div className="mb-4">
                            <i className="feather icon-unlock auth-icon"/>
                        </div>
                        <h3 className="mb-4">Sign Up</h3>
                        <form>

                            <div className="input-field">
                                <ValidationMessage valid={this.state.firstnameValid} message={this.state.errorMsg.first_name} />
                                <TextField type="text" id="first_name" label="First Names" value={this.state.first_name} onChange={(e) => this.updateFirstname(e.target.value)} />
                            </div>

                            <div className="input-field">
                                <ValidationMessage valid={this.state.lastnameValid} message={this.state.errorMsg.last_name} />
                                <TextField type="text" id="last_name" label="Last Names" value={this.state.last_name} onChange={(e) => this.updateLastname(e.target.value)} />
                            </div>

                            <div className="input-field">
                                <TextField type="text" id="national_id" label="National ID" value={this.state.national_id} onChange={(e) => this.updateNationalID(e.target.value)} />
                            </div>

                            <div className="input-field">
                                <ValidationMessage valid={this.state.mobilenumberValid} message={this.state.errorMsg.mobilenumber} />
                                <TextField type="tel" id="mobilenumber" label="Mobile Number" value={this.state.mobilenumber} onChange={(e) => this.updateMobilenumber(e.target.value)} />
                            </div>

                            <div className="input-field">
                                <TextField type="text" id="occupation" label="Occupation" value={this.state.occupation} onChange={(e) => this.updateOccupation(e.target.value)} />
                            </div>

                            <div className="input-field">
                                <TextField type="text" id="account" label="Billing Account" value={this.state.account} onChange={(e) => this.updateAccount(e.target.value)} />
                            </div>

                            <div className="input-field">
                                <ValidationMessage valid={this.state.emailValid} message={this.state.errorMsg.email} />
                                <TextField type="email" id="email" label="Email" value={this.state.email} onChange={(e) => this.updateEmail(e.target.value)} />
                            </div>

                            <div className="input-field">
                                <ValidationMessage valid={this.state.passwordValid} message={this.state.errorMsg.password} />
                                <TextField type="password" id="password" label="Password" value={this.state.password} onChange={(e) => this.updatePassword(e.target.value)} />
                            </div>

                            <div className="input-field">
                                <ValidationMessage valid={this.state.passwordConfirmValid} message={this.state.errorMsg.passwordConfirm} />
                                <TextField type="password" id="Confirmpassword" label="Confirm Password" value={this.state.passwordConfirm} onChange={(e) => this.updatePasswordConfirm(e.target.value)} />
                            </div>
                            <br />
                            <CustomButton type="submit" onClick={this.handleSubmit}>Sign Up</CustomButton>
                        </form>
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </Aux>
        );
        }
    }

export default SignUp;
