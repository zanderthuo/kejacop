import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import './PropertiesPage.css';

import { useHistory } from "react-router-dom";

// import AddPropertyModal from './AddPropertyModal';

// import './PropertiesPage.css'
import PropertyList from './PropertyList';


const PropertiesPage = () => {
    return (
      <>
        <PropertyList />
      </>
    );
}

export default PropertiesPage
