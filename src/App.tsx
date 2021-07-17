import React, { useState } from "react"
import "./App.scss"
import { Redirect, Route } from "react-router-dom"
import { MyButton } from "./components/test-button"
import { route, startUrl, urls } from "./routing"
import { LoginPage } from "./pages/login-page/login"
import { useTitle } from "./hooks/general-hooks"
import { Dashboard } from "./pages/dashboard"

function App() {
  useTitle("Admin-Dashboard")
  return (
    <div className="App">
      <Route exact path="/">
        <Redirect to={startUrl()} />
      </Route>
      <Route exact path={route(urls.login)} component={LoginPage} />
      <Route exact path={route(urls.dashboard)} component={Dashboard} />
    </div>
  )
}

export default App
