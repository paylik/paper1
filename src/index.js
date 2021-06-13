import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from "./redux/store";
import firebase from "firebase";
import "firebase/firestore";


firebase.initializeApp({
    apiKey: "AIzaSyBKfbwmDh83CfeAfNnQBQg84TomIWlDZ_k",
    authDomain: "paper-e49f5.firebaseapp.com",
    projectId: "paper-e49f5",
    storageBucket: "paper-e49f5.appspot.com",
    messagingSenderId: "32547115376",
    appId: "1:32547115376:web:ec3b2f724b328b7e29bfb5",
    measurementId: "G-76T1X9B8F3"
});
firebase.analytics();

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store} firebase={firebase}>
                    <App/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );

reportWebVitals();