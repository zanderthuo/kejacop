import React from 'react'
import {Button,Modal, Container, Dropdown, DropdownButton} from 'react-bootstrap';

export default function ConfirmationModal(){
    return (
        <Modal>
            <Modal.Header className="ModalHeader" closeButton>
                <h4>Assign Work</h4>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <ul style={{listStyle:'none', textAlign:'center',}}>
                        
                        <li>
                            <DropdownButton id="dropdown-basic-button" title="Plumber">
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </DropdownButton>
                        </li>
                    </ul>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button>Assign</Button>
            </Modal.Footer>
        </Modal>
    )
}
