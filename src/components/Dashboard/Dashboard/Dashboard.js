import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';
import Book from '../Book/Book';
// import Navigationbar from '../../Home/Navigationbar/Navigationbar';
import Home from '../../Home/Home/Home';
import OrderList from '../../Admin/OrderList/OrderList';
import AddReviews from '../../Reviews/AddReview';
import BookingLists from '../../Dashboard/BookingLists/BookingLists';

const Dashboard = () => {
    return (
        <div>

            <Router>

                <div className="d-flex">

                    <div className="col-md-2">
                        <Sidebar></Sidebar>
                    </div>

                    <div className="col-md-10 mainbarDesign">
                        <Switch>
{/* 
                            <Route exact path="/">
                                <Home></Home>
                            </Route> */}
                            {/* <Route path="/contact">
                                <Contact></Contact>
                            </Route> */}
                            {/* <Route path="/login">
                                <Login></Login>
                            </Route> */}

                            <Route exact path="/dashboard/book/:id">
                                <Book></Book>
                            </Route>
                            <Route exact path="/dashboard/orderlist">
                                <OrderList></OrderList>
                            </Route>
                            <Route exact path="/dashboard/addReviews">
                                <AddReviews></AddReviews>
                            </Route>
                            <Route exact path="/dashboard/bookList">
                                <BookingLists></BookingLists>
                            </Route>

                        </Switch>

                    </div>

                </div>

            </Router>
        </div>
    );
};

export default Dashboard;