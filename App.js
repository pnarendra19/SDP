import { Route,Routes } from 'react-router-dom';
import Header from './Components/Header';
import React from 'react';
import SignIn from './Components/Signin';
import SignUp from './Components/Signup';
import Student from './Components/Student';
import Counsellor from './Components/Counsellor';
import FetchRegistrations from './Components/Fetchregistrations';
import Success from './Components/Success';
import Courses from './Components/Courses';
function App()
{
  return <React.Fragment>
    <Header>
      <Header/>
    </Header>
    <main>
      <Routes>
        <Route path="/SignIn" element={<SignIn/>}exact/>
        <Route path="/SignUp" element={<SignUp/>}exact/>
        <Route path="/Student" element={<Student/>}exact/>
        <Route path="/Counsellor" element={<Counsellor/>}exact/>
        <Route path="/Courses" element={<Courses/>}exact/>
        <Route path="/Fetchregistrations" element={<FetchRegistrations/>}exact/>
        <Route path="/Success" element={<Success/>}exact/>
        <Route path="/Courses" element={<Courses/>}exact/>

      </Routes>
    </main>
  </React.Fragment>
}

export default App;