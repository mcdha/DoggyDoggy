import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import LoginForm from './components/Login&Register/LoginForm';
import RegisterForm from './components/Login&Register/RegisterForm';
import Adopt from './components/Adopt/Adopt';
import ApplicantsInfo from './components/Adopt/ApplicantsInfo';
import Dogdata from './components/Dogdata/Dogdata';
import SearchDog from './components/Dogdata/SearchDog';
import About from './components/About/About';



  const App = () => {
    const [selectedDogName, setSelectedDogName] = useState('');

    return (
      <>
        <Routes basename="/">
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/applicants" element={<Adopt />} />
            <Route path="/appinfo" element={<ApplicantsInfo selectedDogName={selectedDogName} />} />
            <Route path="/appinfo/:id" element={<ApplicantsInfo />} />
            <Route path="/searchDog" element={<SearchDog />} />
            <Route path="/dogdata" element={<Dogdata />} />
            {/* <Route path="/contacts" element={<Footer />} /> */}
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Route>
        </Routes>
      </>
    );
  };

  export default App;
