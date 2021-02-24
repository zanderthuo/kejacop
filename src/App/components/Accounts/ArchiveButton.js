import React, {useState} from 'react'
import styled from 'styled-components'

const CustomButtonEdit = styled.button`
  width: 80px;
  height: 30px;
  background: #EF3C4E;
  border-radius: 20px;
  border: none;
  color: #fff;
`


const ArchiveButton = () => {
  return (
    <div>
      <CustomButtonEdit><i className="fa fa-trash">Archive</i></CustomButtonEdit>
    </div>
  )
}

export default ArchiveButton
