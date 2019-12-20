import React from 'react'
import { connect } from 'react-redux'
import Canvas from './components/Canvas/Canvas'
import Interface from './components/Interface/Interface'
import './App.css'

function App(props) {
  const { stage } = props
  return (
    <div className="container-fluid align-items-center col-12 col-sm-10 col-md-11	col-lg-11 col-xl-10">
      <div className="left-section col-11 col-sm-11 col-md-8 col-lg-8 col-xl-7">
        <Canvas />
      </div>
      <div className="right-section col-11 col-sm-11 col-md-3 col-lg-3 col-xl-3">
        <Interface />
      </div>
    </div>
  )
}

export default connect(state => {
  return {
    stage: state.stage,
    information: state.information,
  }
})(App)
