import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderNavContainer from './landing/HeaderNavContainer';
import Home from "./landing/Home";
import CourseListConatiner from "./course/CourseListContainer";

const App = () => {
    return (
        <div>
            <Router>
                <div>
                    <HeaderNavContainer/>

                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/courses" component={CourseListConatiner}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;