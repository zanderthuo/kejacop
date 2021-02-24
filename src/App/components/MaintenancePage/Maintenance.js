import React from 'react';
import { Row, Col, Table, Tabs, Tab} from 'react-bootstrap';
// import { Drawer } from 'antd';
import MaintenanceDrawer from './MaintenanceDrawer'

import Aux from '../../../hoc/_Aux'

import avatar1 from '../../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../../assets/images/user/avatar-2.jpg';

import './Maintenance.css'
import styled from 'styled-components';
// import showDrawer from './MaintenanceDrawer'

import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';

import WorkOrderDatatable from './WorkOrderDatatable'


const CustomButton = styled.button`
    position: relative;
    padding: 20px;
    border-radius: 20px;
    background: #9999FF;
    color: #fff;
    height: 5px;
    border: none;
    text-align: center;
`;

const useStyles = makeStyles({
    list: {
      width: 450,
      overflowY:  'none',
    },
  });

function Maintenance(){
    const classes = useStyles();
    // const [visible, setVisible] = useState(false);
    const [state, setState] = React.useState({
        left: false,
        right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
        >
         <MaintenanceDrawer />
        </div>
      );

    // const showDrawer = () =>{
    //     setVisible(true)
    // }

    // const onClose = () => {
    //     setVisible(false)
    // }
    return (
        <Aux>
            <Row>
                <Col md={8} xl={10} className='m-b-30'>
                    <Tabs defaultActiveKey="incomingRequest" id="uncontrolled-tab-example">
                        <Tab eventKey="incomingRequest" title="Incoming Request">
                            <Table responsive>
                                <tbody>
                                    <tr className="Incoming-Request">
                                        <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                        <td>
                                            <span className="mb-1">Alfred Odhiambo|Lamra Appartments|J7</span>
                                            <p className="m-0">Plumber</p>
                                        </td>
                                        <td>
                                            <h6 className="text-muted"><i className="fa fa-circle text-c-red f-10 m-r-15"/>11 MAY 12:56</h6>
                                        </td>
                                        <td><CustomButton className="label theme-bg2 text-white f-12" onClick={toggleDrawer('right', true)}>More Details</CustomButton></td>
                                    </tr>
                                    <tr className="Incoming-Request">
                                        <td><img className="rounded-circle" style={{width: '40px'}} src={avatar1} alt="activity-user"/></td>
                                        <td>
                                            <span className="mb-1">Mary Okello|Visions Appartments|V6</span>
                                            <p className="m-0">Cleaning</p>
                                        </td>
                                        <td>
                                            <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>11 MAY 12:56</h6>
                                        </td>
                                        <td><CustomButton className="label theme-bg2 text-white f-12">More Details</CustomButton></td>
                                    </tr>
                                    <tr className="Incoming-Request">
                                        <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                        <td>
                                            <span className="mb-1">James Mwai|Lego Appartments|HJ7</span>
                                            <p className="m-0">Carpenter</p>
                                        </td>
                                        <td>
                                            <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>11 MAY 12:56</h6>
                                        </td>
                                        <td><CustomButton className="label theme-bg2 text-white f-12">More Details</CustomButton></td>
                                    </tr>
                                    <tr className="Incoming-Request">
                                        <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                        <td>
                                            <span className="mb-1">Peter Mogaka|KwaNjenga Appartments|P12</span>
                                            <p className="m-0">Electrician</p>
                                        </td>
                                        <td>
                                            <h6 className="text-muted"><i className="fa fa-circle text-c-red f-10 m-r-15"/>11 MAY 12:56</h6>
                                        </td>
                                        <td><CustomButton className="label theme-bg2 text-white f-12">More Details</CustomButton></td>
                                    </tr>
                                    <tr className="Incoming-Request">
                                        <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                        <td>
                                            <span className="mb-1">Moses Nyakech|Tumaini Flats|B4</span>
                                            <p className="m-0">T.v Mounting</p>
                                        </td>
                                        <td>
                                            <h6 className="text-muted"><i className="fa fa-circle text-c-orange f-10 m-r-15"/>11 MAY 12:56</h6>
                                        </td>
                                        <td><CustomButton className="label theme-bg2 text-white f-12">More Details</CustomButton></td>
                                    </tr>
                                    <tr className="Incoming-Request">
                                        <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                        <td>
                                            <span className="mb-1">Victor Mukopa|Magunga Appartments|K67</span>
                                            <p className="m-0">Plumber</p>
                                        </td>
                                        <td>
                                            <h6 className="text-muted"><i className="fa fa-circle text-c-red f-10 m-r-15"/>11 MAY 12:56</h6>
                                        </td>
                                        <td><CustomButton className="label theme-bg2 text-white f-12">More Details</CustomButton></td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                                {sideList('right')}
                            </Drawer>
                        </Tab>
                        <Tab eventKey="unassignedRequest" title="Unassigned Request">
                            <Table responsive>
                            <tbody>
                            <tr className="Unassigned-Request">
                                <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                <td>
                                    <span className="mb-1">Alfred Odhiambo|Lamra Appartments|J7</span>
                                    <p className="m-0">Plumber</p>
                                </td>
                                <td>
                                    <h6 className="text-muted"><i className="fa fa-circle text-c-red f-10 m-r-15"/>11 MAY 12:56</h6>
                                </td>
                                <td><CustomButton className="label theme-bg2 text-white f-12">More Details</CustomButton></td>
                            </tr>
                            <tr className="Unassigned-Request">
                                <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                <td>
                                    <span className="mb-1">Peter Mogaka|KwaNjenga Appartments|P12</span>
                                    <p className="m-0">Electrician</p>
                                </td>
                                <td>
                                    <h6 className="text-muted"><i className="fa fa-circle text-c-red f-10 m-r-15"/>11 MAY 12:56</h6>
                                </td>
                                <td><CustomButton className="label theme-bg2 text-white f-12">More Details</CustomButton></td>
                            </tr>
                            <tr className="Unassigned-Request">
                                <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                <td>
                                    <span className="mb-1">Moses Nyakech|Tumaini Flats|B4</span>
                                    <p className="m-0">T.v Mounting</p>
                                </td>
                                <td>
                                    <h6 className="text-muted"><i className="fa fa-circle text-c-red f-10 m-r-15"/>11 MAY 12:56</h6>
                                </td>
                                <td><CustomButton className="label theme-bg2 text-white f-12">More Details</CustomButton></td>
                            </tr>
                        </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="inprogressRequest" title="InProgress Request">
                        <Table responsive>
                        <tbody>
                            <tr className="inprogress-Request">
                                <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                <td>
                                    <span className="mb-1">Alfred Odhiambo|Lamra Appartments|J7</span>
                                    <p className="m-0">Plumber</p>
                                </td>
                                <td>
                                    <h6 className="text-muted"><i className="fa fa-circle text-c-red f-10 m-r-15"/>11 MAY 12:56</h6>
                                </td>
                                <td><CustomButton className="label theme-bg2 text-white f-12">More Details</CustomButton></td>
                            </tr>
                            <tr className="inprogress-Request">
                                <td><img className="rounded-circle" style={{width: '40px'}} src={avatar1} alt="activity-user"/></td>
                                <td>
                                    <span className="mb-1">Mary Okello|Visions Appartments|V6</span>
                                    <p className="m-0">Cleaning</p>
                                </td>
                                <td>
                                    <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>11 MAY 12:56</h6>
                                </td>
                                <td><CustomButton className="label theme-bg2 text-white f-12">More Details</CustomButton></td>
                            </tr>
                            <tr className="inprogress-Request">
                                <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                <td>
                                    <span className="mb-1">James Mwai|Lego Appartments|HJ7</span>
                                    <p className="m-0">Carpenter</p>
                                </td>
                                <td>
                                    <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>11 MAY 12:56</h6>
                                </td>
                                <td><CustomButton className="label theme-bg2 text-white f-12">More Details</CustomButton></td>
                            </tr>
                            <tr className="inprogress-Request">
                                <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                <td>
                                    <span className="mb-1">Peter Mogaka|KwaNjenga Appartments|P12</span>
                                    <p className="m-0">Electrician</p>
                                </td>
                                <td>
                                    <h6 className="text-muted"><i className="fa fa-circle text-c-red f-10 m-r-15"/>11 MAY 12:56</h6>
                                </td>
                                <td><CustomButton className="label theme-bg2 text-white f-12">More Details</CustomButton></td>
                            </tr>
                            <tr className="inprogress-Request">
                                <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                <td>
                                    <span className="mb-1">Moses Nyakech|Tumaini Flats|B4</span>
                                    <p className="m-0">T.v Mounting</p>
                                </td>
                                <td>
                                    <h6 className="text-muted"><i className="fa fa-circle text-c-orange f-10 m-r-15"/>11 MAY 12:56</h6>
                                </td>
                                <td><CustomButton className="label theme-bg2 text-white f-12">More Details</CustomButton></td>
                            </tr>
                            <tr className="inprogress-Request">
                                <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                <td>
                                    <span className="mb-1">Victor Mukopa|Magunga Appartments|K67</span>
                                    <p className="m-0">Plumber</p>
                                </td>
                                <td>
                                    <h6 className="text-muted"><i className="fa fa-circle text-c-red f-10 m-r-15"/>11 MAY 12:56</h6>
                                </td>
                                <td><CustomButton className="label theme-bg2 text-white f-12">More Details</CustomButton></td>
                            </tr>
                        </tbody>
                    </Table>
                        </Tab>
                        <Tab eventKey="completedRequest" title="Completed Request">
                        <Table responsive>
                        <tbody>
                            <tr className="Completed-Request">
                                <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                <td>
                                    <span className="mb-1">Alfred Odhiambo|Lamra Appartments|J7</span>
                                    <p className="m-0">Plumber</p>
                                </td>
                                <td>
                                    <h6 className="text-muted"><i className="fa fa-circle text-c-red f-10 m-r-15"/>11 MAY 12:56</h6>
                                </td>
                                <td><CustomButton className="label theme-bg2 text-white f-12">More Details</CustomButton></td>
                            </tr>
                            <tr className="Completed-Request">
                                <td><img className="rounded-circle" style={{width: '40px'}} src={avatar1} alt="activity-user"/></td>
                                <td>
                                    <span className="mb-1">Mary Okello|Visions Appartments|V6</span>
                                    <p className="m-0">Cleaning</p>
                                </td>
                                <td>
                                    <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>11 MAY 12:56</h6>
                                </td>
                                <td><CustomButton className="label theme-bg2 text-white f-12">More Details</CustomButton></td>
                            </tr>
                            <tr className="Completed-Request">
                                <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                <td>
                                    <span className="mb-1">James Mwai|Lego Appartments|HJ7</span>
                                    <p className="m-0">Carpenter</p>
                                </td>
                                <td>
                                    <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>11 MAY 12:56</h6>
                                </td>
                                <td><CustomButton className="label theme-bg2 text-white f-12">More Details</CustomButton></td>
                            </tr>
                            <tr className="Completed-Request">
                                <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                <td>
                                    <span className="mb-1">Peter Mogaka|KwaNjenga Appartments|P12</span>
                                    <p className="m-0">Electrician</p>
                                </td>
                                <td>
                                    <h6 className="text-muted"><i className="fa fa-circle text-c-red f-10 m-r-15"/>11 MAY 12:56</h6>
                                </td>
                                <td><CustomButton className="label theme-bg2 text-white f-12">More Details</CustomButton></td>
                            </tr>
                            <tr className="Completed-Request">
                                <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                <td>
                                    <span className="mb-1">Moses Nyakech|Tumaini Flats|B4</span>
                                    <p className="m-0">T.v Mounting</p>
                                </td>
                                <td>
                                    <h6 className="text-muted"><i className="fa fa-circle text-c-orange f-10 m-r-15"/>11 MAY 12:56</h6>
                                </td>
                                <td><CustomButton className="label theme-bg2 text-white f-12">More Details</CustomButton></td>
                            </tr>
                            <tr className="Completed-Request">
                                <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                <td>
                                    <span className="mb-1">Victor Mukopa|Magunga Appartments|K67</span>
                                    <p className="m-0">Plumber</p>
                                </td>
                                <td>
                                    <h6 className="text-muted"><i className="fa fa-circle text-c-red f-10 m-r-15"/>11 MAY 12:56</h6>
                                </td>
                                <td><CustomButton className="label theme-bg2 text-white f-12">More Details</CustomButton></td>
                            </tr>
                        </tbody>
                    </Table>
                  </Tab>
                        <Tab eventKey="workOrders" title="Work Orders">
                          <WorkOrderDatatable />
                        </Tab>
                    </Tabs>
                </Col>

            </Row>
        </Aux>
    );
}

export default Maintenance
