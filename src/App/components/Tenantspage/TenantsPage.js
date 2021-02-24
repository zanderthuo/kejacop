import React, {useState} from 'react'
import {Tab, Tabs} from 'react-bootstrap'
import { useHistory } from "react-router-dom";

import TenantsDatatable from './TenantsDatatable'
import TenantsRaisedVacationDatatable from './TenantsRaisedVacationDatatable'
import TenantsExpiredLeasesDatatable from './TenantsExpiredLeasesDatatable'
import EvictedTenantsDatatable from './EvictedTenantsDatatable'

import styled from 'styled-components'
import AddTenantsPage from './AddTenantsPage'
import './TenantsPage.css'

const CustomButton = styled.button`
  position: absolute;
  width: 150px;
  left: 800px;
  top: 30px;
  height: 40px;
  background: #9595C9;
  color: #fff;
  border-radius: 20px;
  border: none;
`

const TenantsPage = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push("/tenantspage/addtenant");
  }

  return (
    <div>
      <CustomButton onClick={handleClick}>Add Tenant</CustomButton>
      <Tabs variant="pills" defaultActiveKey="manageExisting" className="mb-3">
          <Tab eventKey="manageExisting" title="Manage Existing">
            <TenantsDatatable />
          </Tab>
          <Tab eventKey="evictedTenants" title="Evicted Tenants">
            <EvictedTenantsDatatable />
          </Tab>
          <Tab eventKey="raisedVacations" title="Raised Vacations">
            <TenantsRaisedVacationDatatable />
          </Tab>
          <Tab eventKey="expiredLeases" title="Expired Leases">
            <TenantsExpiredLeasesDatatable />
          </Tab>
      </Tabs>
    </div>
  )
}

export default TenantsPage
