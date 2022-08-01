import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './router/route'
import { Fragment } from 'react';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
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
