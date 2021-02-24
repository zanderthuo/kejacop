import React from 'react'
import styled from 'styled-components'

const CustomEditButton = styled.button`
  width: 80px;
  height: 30px;
  background: #446E7B;
  border-radius: 20px;
  border: none;
  color: #fff;
`

const EditButton = () => {
  return (
    <CustomEditButton className="fa fa-edit"> Edit</CustomEditButton>
  )
}

export default EditButton
