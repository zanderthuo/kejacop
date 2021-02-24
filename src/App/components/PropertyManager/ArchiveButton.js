import React from 'react'
import styled from 'styled-components'

const CustomArchiveButton = styled.button`
  width: 80px;
  height: 30px;
  background: #EF3C4E;
  border-radius: 20px;
  border: none;
  color: #fff;
`

const ArchiveButton = () => {
  return (
    <CustomArchiveButton className="fa fa-trash"> Archive</CustomArchiveButton>
  )
}

export default ArchiveButton
