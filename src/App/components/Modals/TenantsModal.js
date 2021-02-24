import React, { useState } from 'react';
import { Modal, Button, Form, Col, Container } from 'react-bootstrap';
import '../../css/TenantsModal.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#F5F6F7F8",
    position: "absolute",
    width: 504,
    height: 400,
    left: 10,
    top: 27,
    padding: 20,
    borderRadius: 20
  },
  footer: {
    backgroundColor: "#E5E5E5",
    height: 70,                                                                                                                                                                   
    top: 330,
    padding: 20,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    position: "absolute",
    width: 497,
    left: 1,
    borderRadius: 20
  }
}));

export default function TenantsModal(){
  const classes = useStyles();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
    <button className="btn1" onClick={handleShow}><i class="fa fa-plus" style={{color:'white'}}>Add Tenant</i></button>
    
      <Modal show={show} onHide={handleClose} controlId="moo" >
      <Container className={classes.root}>
        <Modal.Body >
          
          <Form >
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="prpp">
                <Form.Control className="fc" as="select">
                  <option>Property</option>
                  <option>Property2</option>
                  <option>Property3</option>
                  <option>Property4</option>
                  <option>Property5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="unn">
                <Form.Control className="cf" as="select">
                  <option>Unit</option>
                  <option>Unit2</option>
                  <option>Unit3</option>
                  <option>Unit4</option>
                  <option>Unit5</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            
          <Form.Group as={Col} md="11" controlId="nam">
            <Form.Control className="na" placeholder="Name" />
          </Form.Group>
          <Form.Group as={Col} md="11" controlId="idno">
            <Form.Control className="id" placeholder="ID Number" />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
          </Form.Group>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
          <Form.Group as={Col} md="11" controlId="phoneno">                                                                                                                                                     
            <Form.Control className="phon" placeholder="Phone Number" />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="gend">
            <Form.Control className="ggg" as="select">
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
            
            </Form.Control>

          </Form.Group>
        </Form>
        <br /> <br /> <br />
        
        </Modal.Body>
        <Modal.Footer className="modal-footerr">
          <Button className="caan" onClick={handleClose}>Cancel</Button>
          <Button className="adt">Add Tenant</Button>
        </Modal.Footer>
        </Container>
      </Modal>

      
    </div>
  );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

