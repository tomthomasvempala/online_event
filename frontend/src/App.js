import './App.css';
import RegistrationForm from './components/Registrations/registrations';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/home';
import OnlineEventApplicantsTable from './components/Admin/adminTable';
import Login from './components/Admin/adminlogin';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<RegistrationForm />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/admintable" element={<OnlineEventApplicantsTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
