import './App.css';
import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes'
import { Template } from './components/MainComponents'
import  Header from './components/partials/Header'
import footer from './components/partials/footer'
const Page = (props) => {
  return (
    <BrowserRouter>
    <Template>
      <Header />
      <Routes />
      <Footer />
    </Template>
    </BrowserRouter>
  )
}
  
  const mapStateToProps = (state) => {
    return {
      user: state.user
    }
  }

  const mapDispatchToProps = (dispacth) => {
    return {

    }
  }