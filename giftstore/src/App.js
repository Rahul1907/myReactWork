import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import MainCompo from './Components/MainComponent'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './Components/Reducers/rootreducers'
const store  =createStore(rootReducer)
function App() {
  return (
    <div >
      <Provider store={store}>
        <Navbar/>
        <MainCompo/>
        <Footer/>
      </Provider>
    </div>
  );
}

export default App;
