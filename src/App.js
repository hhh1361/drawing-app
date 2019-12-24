import React from 'react';
import { connect } from 'react-redux';
import Canvas from './components/canvas/Canvas';
import Interface from './components/interface/Interface';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App(props) {
  return (
    <>
      <div className="header col-12">
        <h1>Drawing app</h1>
      </div>

      <div className="container-fluid align-items-center col-lg-11 col-xl-10">
        <div className="left-section">
          <Canvas />
        </div>
        <div className="right-section">
          <Interface />
        </div>
      </div>
    </>
  );
}

export default connect(state => {
  return {
    stage: state.stage,
    information: state.information,
  };
})(App);
