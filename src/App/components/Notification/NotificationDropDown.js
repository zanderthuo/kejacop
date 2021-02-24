import React,{Component} from 'react'
import {Dropdown} from 'react-bootstrap';
import UserStore from '../SignIn_SIgnUp/store/UserStore'

import LogoutButton from './LogoutButton'

class NotificationDropDown extends Component {
  constructor(props) {
    super(props);
    this.props.logout();
  }

  render() {
    const { users, user } = this.props
    return (
      <>
        <Dropdown alignRight={!this.props.rtlLayout} className="drp-user">
            <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                <i className="icon feather icon-settings"/>
            </Dropdown.Toggle>
            <Dropdown.Menu alignRight className="profile-notification">
                <div className="pro-head">
                    <img src="#" className="img-radius" alt="User Profile"/>
                    <span>{user.email}</span>
                    <a href="#" className="dud-logout" title="Logout">
                        <i className="feather icon-log-out"/>
                    </a>
                </div>
                <ul className="pro-body">
                    <li><a href="#" className="dropdown-item"><i className="feather icon-settings"/> Settings</a></li>
                    <li><a href="#" className="dropdown-item"><i className="feather icon-user"/> Profile</a></li>
                    <li><a href="#" className="dropdown-item"><i className="feather icon-mail"/> My Messages</a></li>
                    <li><a href="#" className="dropdown-item"><i className="feather icon-lock"/> Lock Screen</a></li>
                </ul>
                <div className="logout">
                  <LogoutButton />
                </div>
            </Dropdown.Menu>
        </Dropdown>
      </>
    );
  }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    logout: userActions.logout
};

const connectedNotificationDropDown = connect(mapState, actionCreators)(NotificationDropDown)

export {connectedNotificationDropDown as NotificationDropDown};
