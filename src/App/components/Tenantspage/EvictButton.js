import React, {useState} from 'react'
import styled from 'styled-components'
import EvictionNoticeModal from './EvictionNoticeModal'

const CustomButtonEvict = styled.button`
  width: 80px;
  height: 30px;
  background: #446E7B;
  border-radius: 20px;
  border: none;
  color: #fff;
`

const EvictButton = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <CustomButtonEvict onClick={handleShow}>Evict</CustomButtonEvict>
      <EvictionNoticeModal
        show={show}
        onHide={handleClose}
      />
    </div>
  )
}

export default EvictButton
