import React, {Component} from 'react';
import NavSearch from './NavSearch';
import Aux from "../../../../../hoc/_Aux";

class NavLeft extends Component {

    render() {

        return (
            <Aux>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><NavSearch/></li>
                </ul>
            </Aux>
        );
    }
}



export default NavLeft;
