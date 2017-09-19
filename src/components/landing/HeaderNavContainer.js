import React, { PropTypes } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

export const HeaderNavContainer = ({apiCallsInProgress}) => {
    return (
        <nav className="navbar navbar-toggleable-sm bg-info navbar-inverse">
            <div className="container">
                <div className="collapse navbar-collapse" id="mainNav">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" exact activeClassName="active" to="/">Home</NavLink>
                        <NavLink className="nav-item nav-link" activeClassName="active" to="/course">Course</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

HeaderNavContainer.propTypes = {
    apiCallsInProgress: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
    apiCallsInProgress: state.apiReducer.apiCallsInProgress
});

export default connect(mapStateToProps)(HeaderNavContainer);