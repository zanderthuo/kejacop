import React, {useState} from 'react'
import styled from 'styled-components'

const CustomButtonEdit = styled.button`
  width: 80px;
  height: 30px;
  background: #446E7B;
  border-radius: 20px;
  border: none;
  color: #fff;
`


const EditButton = () => {
  return (
    <div>
      <CustomButtonEdit><i className="fa fa-edit">Edit</i></CustomButtonEdit>
    </div>
  )
}

export default EditButton
