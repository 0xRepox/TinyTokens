import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CauseList from './components/CauseList';
import CauseDetails from './components/CauseDetails';
import DonationForm from './components/DonationForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CauseList />} />
        <Route path="/cause/:id" element={<CauseDetails />} />
        <Route path="/donate/:causeId" element={<DonationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
