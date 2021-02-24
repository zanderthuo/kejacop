import React from 'react';
import { Card, Col } from 'react-bootstrap'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


export default function PropertyRatings(){
  return(
    <>
      <Col md={6} xl={12}>
        <Card className="cardRating">
            <Card.Header>
                <Card.Title as='h5'>Rating</Card.Title>
            </Card.Header>
            <Card.Body>
                <div className="row align-items-center justify-content-center m-b-20">
                    <div className="col-6">
                        <h2 className="f-w-300 d-flex align-items-center float-left m-0">4.7 <i className="fa fa-star f-10 m-l-10 text-c-yellow"/></h2>
                    </div>
                    <div className="col-6">
                        <h6 className="d-flex  align-items-center float-right m-0">0.4 <i className="fa fa-caret-up text-c-green f-22 m-l-10"/></h6>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12">
                        <h6 className="align-items-center float-left"><i className="fa fa-star f-10 m-r-10 text-c-yellow"/>5 | Water</h6>
                        <h6 className="align-items-center float-right">384</h6>
                        <div className="progress m-t-30 m-b-20" style={{height: '6px'}}>
                            <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"/>
                        </div>
                    </div>

                    <div className="col-xl-12">
                        <h6 className="align-items-center float-left"><i className="fa fa-star f-10 m-r-10 text-c-yellow"/>4 | Electricity</h6>
                        <h6 className="align-items-center float-right">145</h6>
                        <div className="progress m-t-30  m-b-20" style={{height: '6px'}}>
                            <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '35%'}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"/>
                        </div>
                    </div>

                    <div className="col-xl-12">
                        <h6 className="align-items-center float-left"><i className="fa fa-star f-10 m-r-10 text-c-yellow"/>3 | Security</h6>
                        <h6 className="align-items-center float-right">24</h6>
                        <div className="progress m-t-30  m-b-20" style={{height: '6px'}}>
                            <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                        </div>
                    </div>

                    <div className="col-xl-12">
                        <h6 className="align-items-center float-left"><i className="fa fa-star f-10 m-r-10 text-c-yellow"/>2 | Drainage</h6>
                        <h6 className="align-items-center float-right">1</h6>
                        <div className="progress m-t-30  m-b-20" style={{height: '6px'}}>
                            <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '10%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"/>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <h6 className="align-items-center float-left"><i className="fa fa-star f-10 m-r-10 text-c-yellow"/>1 | Parking</h6>
                        <h6 className="align-items-center float-right">0</h6>
                        <div className="progress m-t-30  m-b-5" style={{height: '6px'}}>
                            <div className="progress-bar" role="progressbar" style={{width: '0%'}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"/>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
      </Col>
    </>
  )
}
