import React from 'react';
import ReactDom from 'react-dom';
import "jquery";
import "popper.js/dist/umd/popper"
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import App from './App';
import NavBar from './NavBar';
import "./index.css"
var element = <button class = "btn btn-danger">Hello</button>
ReactDom.render(<App />, document.getElementById("root"))
