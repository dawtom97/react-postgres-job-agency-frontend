import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CompanyDetailsPage } from './views/CompanyDetailsPage';
import { HomePage } from './views/HomePage';
import { UpdatePage } from './views/UpdatePage';

export const App = () => {
  return (
    <div>
      <Router>
        <Routes>
           <Route path="/" element={<HomePage/>}  />
           <Route path="/companies/:id/update" element={<UpdatePage/>}  />
           <Route path="/companies/:id" element={<CompanyDetailsPage/>}  />
        </Routes>
      </Router>
    </div>
  )
}


