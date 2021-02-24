import React, {useState} from 'react'
import styled from 'styled-components'
import EvictionNoticeModal from './EvictionNoticeModal'

const CustomButtonEdit = styled.button`
  width: 80px;
  height: 30px;
  background: #9595C9;
  border-radius: 20px;
  border: none;
  color: #fff;
`


const EditButton = () => {
  return (
    <div>
      <CustomButtonEdit>Edit</CustomButtonEdit>
    </div>
  )
}

export default EditButton
