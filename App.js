import React, {Component} from 'react';
import './App.css';
import Header from './Component/layout/Header';
import Footer from './Component/layout/Footer';
import Main from './Component/Main';
import Navi from './Component/layout/Navi';
// import Sidebar from './Component/layout/Sidebar';
// import './Sidebar.css';

export default function App({value}){

    return(
        <div>
            <Header/>
            <Main/>
            <Footer/>
            <Navi/>
            {/* <Sidebar/> */}
        </div>
    )
}