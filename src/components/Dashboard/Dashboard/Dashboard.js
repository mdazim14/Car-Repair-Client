import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';
import Book from '../Book/Book';
// import Navigationbar from '../../Home/Navigationbar/Navigationbar';
import Home from '../../Home/Home/Home';
import OrderList from '../../Admin/OrderList/OrderList';
import AddReviews from '../../Reviews/AddReview';
import BookingLists from '../../Dashboard/BookingLists/BookingLists';
import AddProduct from '../../AllProducts/AddProduct';

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
                            <Route path="/dashboard/bookService/:id">
                                <Book ></Book>
                            </Route>

                            <Route  path="/dashboard/orderlist">
                                <OrderList></OrderList>
                            </Route>
                            <Route  path="/dashboard/addReviews">
                                <AddReviews></AddReviews>
                            </Route>
                            <Route  path="/dashboard/bookList">
                                <BookingLists></BookingLists>
                            </Route>
                            <Route  path="/dashboard/addProduct">
                                <AddProduct></AddProduct>
                            </Route>

                        </Switch>

                    </div>

                </div>

            </Router>
        </div>
    );
};

export default Dashboard;