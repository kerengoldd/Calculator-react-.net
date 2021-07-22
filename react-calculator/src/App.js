import { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import CalculationHistory from './components/calculation-history';
import Calculator from './components/calculator';
import CalculatorEdit from './components/calculator-edit';
import CalculatorEditWithDropdown from './components/calculator-edit-with-dropdown';
import CalculatorWithDropdown from './components/calculator-with-dropdown';
import Navbar from './components/navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className='py-3'>
        <div className="container">
          <Route exact path='/' component={CalculatorWithDropdown} />
          <Route exact path='/history' component={CalculationHistory} />
          <Route exact path='/calculator/:id' component={CalculatorEditWithDropdown} />
        </div>
      </main>
     
    </BrowserRouter>
  )
}

export default App;
