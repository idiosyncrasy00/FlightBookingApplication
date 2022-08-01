import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './router/route'
import { Fragment } from 'react';
import AnotherPage2 from './components/anotherPage2'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <AnotherPage2 />
        <div className="App">
          <Routes>
            {
              routes.map((route) => {
                return (
                  <Fragment>
                    <Route path={route.path} element={route.component}></Route>
                  </Fragment>
                );
              })
            }
          </Routes>
        </div>
      </Router >
    </>
  )
}

export default App
