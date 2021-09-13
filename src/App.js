import './App.css';
import {Fragment} from 'react';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <section>
      <div className="container-fluid">
        <Navbar />
        <div className="row">
          <div className="col-12">
            <div className="row">
              <Sidebar />
              <HomePage />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
