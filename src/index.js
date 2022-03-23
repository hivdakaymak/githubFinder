import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './components/App';
import {BrowserRouter, Route} from 'react-router-dom';

const HomePage = () => (
    <div>Home Page</div>
)
const ContactPage = () => (
    <div>Contact Page</div>
)
const ProductPage = () => (
    <div>Products Page</div>
)

const NotFoundPage = () => (
    <div>NotFound Page</div>
)

const routes = (
    <BrowserRouter>
    <Route exact path="/" component={HomePage} />
    <Route path="/product" component={ProductPage} />
    <Route component={NotFound} />



    </BrowserRouter>



);

ReactDOM.render(routes, document.getElementById('root'));