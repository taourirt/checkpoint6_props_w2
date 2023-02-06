import User from './Profile/User'
import React from 'react'
import './App.css'
import PropTypes from "prop-types";

function App() {
  const fullName = "Taourirt Ferhat"
  const bio = "Ingénieur financier"
  const profession = "Ingénieur Data"
  function handleName(){
    alert("Taourirt Ferhat")
  }
const styleObject = {color: "blue", alignItems: 'center', textAlign: 'center', marginLeft:'500px'}
 User.propTypes = {
 anyProp: PropTypes.any,
 booleanProp: PropTypes.bool,
 numberProp: PropTypes.number,
 stringProp: PropTypes.string,
 functionProp: PropTypes.func
};
return (
    <div style={styleObject}>
      
      <User fullName={fullName} bio={bio} profession={profession} handleName={handleName} />
    </div>
  )
}

export default App
