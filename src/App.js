
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import Calendar from './components/pages/CalendarPage/Calendar';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exaxct path='/home' component={Home}/>
        <Route exact path='/calendar' component={Calendar}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
