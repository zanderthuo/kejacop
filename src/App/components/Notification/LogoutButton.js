import React from 'react'
import axios from 'axios'
import UserStore from '../SignIn_SIgnUp/store/UserStore'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";

const Logout = styled.button`
    position: relative;
    left: 200px;
    top: -10px;
    height: 30px;
    width: 80px;
    background: #446E7B;
    border-radius: 20px;
    border: none;
    color: #fff;
`

const LogoutButton = () => {
  let history = useHistory();

  // const  = () => {
  //   history.push("/signin");
  // }
  //To use on logout function

      const handleClick = (e) => {
        try {
          let res = axios.post(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
              const persons = res.data;
              this.setState({ persons });
          });
          let result = res.json();

          if (result && result.success) {
            UserStore.isLoggedIn = false;
            UserStore.username = ''
          }

        } catch (e) {
          console.log(e)
        }
      }
  return (
    <div>
      <Logout onClick={handleClick}>Sign Out</Logout>
    </div>
  )
}

export default LogoutButton
