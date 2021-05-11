import logo from '../logo.svg';
import React from "react";

export default class Random extends React.Component {
  render() {
  let svgSize = Math.floor(Math.random() * 500 + 100);
  let svgTop = Math.floor(Math.random() * 500);
  let svgLeft = Math.floor(Math.random() * 1000);
  const svgCount = Math.floor(Math.random() * 10);

    return (
      <img src={logo} className="App-logo" alt="logo" 
          style={{
            height: Math.floor(Math.random() * 500 + 100),
            top: Math.floor(Math.random() * 500),
            right: Math.floor(Math.random() * 1000),
          }}
        />
    )
  }
}