import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Blog from './components/Blog';
import BlogItem from './components/BlogItem';

function App() {
  return (
    <Router>

      <Navigation />

      <Switch>
        {/* <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/faq">
          <FAQ />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route> */}
        <Route path="/" exact component={Home} />
        <Route path="/faq" component={FAQ} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/blog/:id" children={<BlogItem />} />
        <Route path="*" >
          <h1>404</h1>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
