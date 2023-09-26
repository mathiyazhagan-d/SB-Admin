import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Footer from './components/Footer'
import Table from './components/Table'
import Charts from './components/Charts'
import Createuser from './components/Createuser'
import Button from './components/Button'
import Cardcomp from './components/Cardcomp'
import Colors from './components/Color'
import Login from './components/Login'
import './App.css'
import './assets/sb-admin-2.min.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <div id="wrapper">
          <Sidebar />
          <div id='content-wrapper' className='d-flex flex-column'>
            <div id='content'>
              <Topbar />
              <div className='container-fluid'>
                <Routes>
                  <Route path='/' element={<Dashboard />}></Route>
                  <Route path='/tables' element={<Table />}></Route>
                  <Route path="/tables/createuser" element={<Createuser />}></Route>
                  <Route path="/charts" element={<Charts />}></Route>
                  <Route path="/buttons" element={<Button />}></Route>
                  <Route path="/cards" element={<Cardcomp />}></Route>
                  <Route path="/colors" element={<Colors />}></Route>
                  <Route path='/login' element={<Login />}></Route>
                </Routes>
              </div>
            </div>
            <Footer></Footer>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
