import React from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";

const Logout = styled.button`
    position: relative;
    left: 180px;
    top: -10px;
    height: 30px;
    width: 100px;
    background: #446E7B;
    border-radius: 20px;
    border: none;
    color: #fff;
`

const LogoutButton = () => {
  let history = useHistory();

  const handleClick = () => {
    localStorage.removeItem('user')
    history.push("/signin");
  }
  return (
    <div>
      <Logout onClick={handleClick}>Sign Out</Logout>
    </div>
  )
}

export default LogoutButton
