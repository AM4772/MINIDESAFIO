import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from './components/Form';
import Header from './components/Header';
import StudentTable from './components/StudentTable';
import './App.css';

function App() {
  return (  
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/students' component = { StudentTable } />
          <Route path='/form' component = { Form } />
          <Header />  
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
