import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/header'
import Home from './pages/home'
import About from './pages/about'
import Search from './pages/search'

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default hot(module)(Router)
