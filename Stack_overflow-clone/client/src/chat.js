import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom' 
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import AllRoutes from './AllRoutes'
class KommunicateChat extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        (function(d, m){
            var kommunicateSettings = 
                {"appId":"25e18ddc1c379e2ce275f89ed75d070a6","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
        
        }
        render()
        {
            return(
                 <div className="App">
                <Router >
                  <Navbar />
                  <AllRoutes />
                </Router >
              </div>
            )
        }
    }

export default KommunicateChat;