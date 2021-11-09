
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './components/pages/HomePage/Home';
import Calendar from './components/pages/CalendarPage/Calendar';
import Login from './components/pages/LoginPage/Login';
import Register from './components/pages/RegisterPage/Register';
import Footer from './components/pages/Footer/Footer';
import DocRegister from './components/pages/DocRegisterPage/DocRegister';
import Feedback from './components/pages/FeedbackPage/Feedback'

//Routes contain path with different redirections when one click on a link and/or button
function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/calendar' component={Calendar}/>
        <Route exact path = '/login' component = {Login}/>
        <Route exact path = '/register' component = {Register}/>
        <Route exact path = '/register_doc' component = {DocRegister}/>
        <Route exact path='/feedback' component={Feedback}/>
      </Switch>
      <Footer/>
    </Router>
    
  );
}

export default App;
