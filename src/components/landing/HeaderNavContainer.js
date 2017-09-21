import React, { PropTypes } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

export const HeaderNavContainer = () => {
    return (
        <nav className="navbar navbar-toggleable-sm bg-info navbar-inverse">
            <div className="container">
                <div className="collapse navbar-collapse" id="mainNav">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" exact activeClassName="active" to="/">Home</NavLink>
                        <NavLink className="nav-item nav-link" activeClassName="active" to="/courses">Course</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
};

HeaderNavContainer.propTypes = {
    apiCallsInProgress: PropTypes.number.isRequired
};

export default HeaderNavContainer;