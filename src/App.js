import './App.css';
import {Menu, Header, Team, Person, imageList, ContactUs} from './components'
import {Route, Routes,HashRouter} from 'react-router-dom'
import {useState} from "react";

function App() {
    const [page,setPage]=useState(0)
    return (
  <HashRouter>
      <Routes>
          <Route path="/" element={<Menu page={page} setPage={setPage}/>}>
          <Route index element={<Header page={page} setPage={setPage}/>}/>
              <Route path='/team' element={<Team imageList={imageList} page={page} setPage={setPage}/>}/>
              <Route path='/team/:teamId' element={<Person imageList={imageList}/>}/>
              <Route path='/contact-us' element={<ContactUs page={page} setPage={setPage}/>} />
          </Route>
      </Routes>
  </HashRouter>
  );
}

export default App
