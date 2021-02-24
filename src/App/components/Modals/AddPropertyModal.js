import React, { useState } from 'react';
import { Modal, Button, Form, Col, Container } from 'react-bootstrap';
import '../../css/AddPropertyModal.css';
import { IconButton } from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root : {
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
    left: 1
  }
}));

export default function AddPropertyModal(){
  const classes = useStyles();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onImageChange = event => {
    if(event.target.files && event.target.files[0]){
      let setData;
      let reader = new FileReader();
      let file = event.target.files[0];
      reader.onloaded = () => {
        setData({
          imagePreview: reader.result,
          file: file
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
    <button className="btn2" onClick={handleShow}><i class="fa fa-plus" style={{color:'white'}}>Add Property</i></button>

      <Modal show={show} onHide={handleClose}> 
      <Container className={classes.root}>
        <Modal.Body>
          <Form>

              <input
              accept="image/*"
              onChange={onImageChange}
              className="imageinput"
              id="contained-button-file"
              name="image"
              type="file"
            />

              <IconButton>
                <AddAPhotoIcon

                  style={{
                    margin: "10px",
                    width: "239px",
                    left: "122px",
                    top: "10px",
                    height: "20px"
                  }}
                />
              </IconButton>

            <Button type="submit" variant="outlined" className="btnsub">
              Default
            </Button>

          <Form.Group as={Col} md="11" controlId="propnm">
            <Form.Control className="propname" placeholder="Property Name" />
          </Form.Group>
          <Form.Group as={Col} md="11" controlId="proploc">
            <Form.Control className="id" placeholder="Property Location" />
          </Form.Group>
          <Form.Group as={Col} md="11" controlId="uninum">
            <Form.Control className="phon" placeholder="Number of Units" />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="landll">
            <Form.Control className="ggg" as="select" placeholder="Landlord">
              <option>Landlord</option>
              <option>Kamau</option>
              <option>Shikuku</option>
              <option>Otieno</option>

            </Form.Control>

          </Form.Group>
        </Form>
        </Modal.Body>
        <br /> <br /> <br />
        <Modal.Footer className={classes.footer}>
          <Button className="caan" onClick={handleClose}>Cancel</Button>
          <Button className="adt">Add Property</Button>
        </Modal.Footer>
        </Container>
      </Modal>
    </>
  );
}
