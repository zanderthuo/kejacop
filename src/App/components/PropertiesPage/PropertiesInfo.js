import React, { useState, } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import './PropertiesPage.css'
import PropertiesData from '../../data/Properties'
import { Formik } from "formik";

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';

// import { GrClose } from "react-icons/gr";

import PropertyEditForm from './PropertyEditForm'

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(2, 4, 3),
		boxShadow: theme.shadows[5],
		borderRadius: '.3rem',
		outline: 'none',
		width: '80vw',
		height: '80vh'
	},
	paper2: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(2, 4, 3),
		boxShadow: theme.shadows[5],
		borderRadius: '.3rem',
		outline: 'none',
	},
}));

const PropertiesInfo = () => {
  const classes = useStyles();
  const [properties, setProperties] = React.useState(PropertiesData)
  const [open, setOpen] = React.useState(false);
  const [post, setPostValue] = React.useState({
    name: '',
    location: '',
    landlord: '',
    caretaker: ''
  })

  const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

  const handleEditPost = () => {
		const post = {
			name: 'Pema Flats',
	        location: 'Ruiru',
	        agent: 'Njuguna',
          caretaker: 'Muiruri'
		}

		setPostValue({...post});
		handleOpen()
	}

    function handleToggleComplete(id){
      const newProperty = properties.map((item => {
        if(item.id === id){
          const updatedItem = {
            ...item,
            isUpdated: !item.isUpdated,
          };

          return updatedItem;
        }

        return item;
      }));

      setProperties(newProperty);
    }

  return (
    <div>
      <Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
        close
			>
				<Fade in={open}>
					<div className={classes.paper}>
						<div className="new-post-title-container">
							<h4 className="new-post-title">{post.title}</h4>
						</div><br />
						<Formik
				            initialValues={{
				                name: post.name,
				                location: post.location,
                        landlord: post.landlord,
                        caretaker: post.caretaker
				            }}
				            // validationSchema={updateAccountSchema}
				            onSubmit={(values, { setSubmitting, resetForm }) => {
				            	console.log(values)
				            }}
				        >
				        	{props => <PropertyEditForm {...props} />}
				        </Formik>
					</div>
				</Fade>
			</Modal>
      <Card className="propInfo">
       <Card.Body>
        <h6><b>Property Information</b></h6>
          <Col xs={3} md={3}>
              <Card.Img src="https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?cs=srgb&dl=apartment-balcony-buildings-city-439391.jpg&fm=jpg" />
          </Col>
          <Col xs={10} md={6}>
            <ul className="propertyInfo" style={{listStyle: 'none'}}>
              {properties.map((item) => (
                <>
                  <li key={item.id}>Name:  <span>{item.name}</span></li>
                  <br />
                  <li>Location: <span>{item.location}</span></li>
                  <br />
                  <li>Agent: <span>{item.agent}</span></li>
                  <br />
                  <li>Caretaker: <span>{item.caretaker}</span> </li>
                  <br />
                </>
              ))}
            </ul>
          </Col>
          <Col xs={5} md={3}>
            <Button onClick={handleEditPost} className="btnEdit">Edit</Button>
          </Col>
        </Card.Body>
      </Card>
    </div>
  )
}

export default PropertiesInfo
