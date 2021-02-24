import React, {useState} from 'react'
import styled from 'styled-components'
import EvictionNoticeModal from './EvictionNoticeModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'

const CustomButtonEdit = styled.button`
  width: 120px;
  height: 40px;
  background: #9595C9;
  border-radius: 20px;
  border: none;
  color: #fff;
`


const RenewButton = () => {
  return (
    <div>
      <CustomButtonEdit><FontAwesomeIcon icon={faSync} /> Renew Lease</CustomButtonEdit>
    </div>
  )
}

export default RenewButton
