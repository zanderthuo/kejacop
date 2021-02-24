import React, {useState} from 'react'
import styled from 'styled-components'
import EvictionNoticeModal from './EvictionNoticeModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const CustomButtonEdit = styled.button`
  width: 120px;
  height: 40px;
  background: #EF3C4E;
  border-radius: 20px;
  border: none;
  color: #fff;
`


const ArchiveButton = () => {
  return (
    <div>
      <CustomButtonEdit><FontAwesomeIcon icon={faTrash} /> Archive</CustomButtonEdit>
    </div>
  )
}

export default ArchiveButton
