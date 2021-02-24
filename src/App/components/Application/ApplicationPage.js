import React, { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import ProspectiveTenantsDatatable from './ProspectiveTenantsDatatable'
import ApprovedRequestDatatable from './ApprovedRequestDatatable'
import InviteApplicantModal from './InviteApplicantModal'
import styled from 'styled-components'
import './Application.css'

const CustomButton = styled.button`
  position: absolute;
  width: 150px;
  left: 750px;
  top: 30px;
  height: 40px;
  background: #9595C9;
  color: #fff;
  border-radius: 20px;
  border: none;
`

const ApplicationPage = () => {

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  return (
    <div>
      <CustomButton onClick={handleShow} className="inviteApplicantBtn">Invite Applicant</CustomButton>
      <Tabs variant="pills" defaultActiveKey="home" className="mb-3">
          <Tab eventKey="home" title="Prospective Tenants">
            <ProspectiveTenantsDatatable />
          </Tab>
          <Tab eventKey="profile" title="Approved Requests">
            <ApprovedRequestDatatable />
          </Tab>
      </Tabs>
      <InviteApplicantModal
        show={show}
        onHide={handleClose}
      />
    </div>
  )
}

export default ApplicationPage
