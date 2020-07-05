import React, { Component } from "react"
import ReactDOM from "react-dom"
import AnimatedNavbar from "./AnimatedNavbar"
import styled from "styled-components"
import "./index.css"

 const AppContainer = styled.div`

  display: flex;
  flex-direction: column;
  padding-left: 350px;
  

  > div:first-of-type {
    flex: 1 0 70vh;
  }
`

export default class NavbarContainer extends Component {
  state = { duration: 300 }



  render() {
    return (
      <AppContainer>
        
        <AnimatedNavbar duration={this.state.duration} />
        
       
      </AppContainer>
    )
  }
}


