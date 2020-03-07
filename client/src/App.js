import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'; 
import Nav from 'react-bootstrap/Nav'; 
import './App.css';

// INTERNAL COMPONENTS
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';

// IMAGES
import logo from '../src/assets/images/logo-1.png';
import sideImage from '../src/assets/images/favicon-2.png';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      // relates to top level in website
      title: 'Space & Harmony',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'FAQ', path: '/faq'},
        { title: 'Contact', path: '/contact'}
      ],

      // top level information for each page
      home: {
        imgSrc: logo,
        subTitle: 'The first step in crafting a life you want is to get rid of everything you don\'t.',
        text: '- Joshua Becker'
      },
      about: {
        title: 'About Me.'
      },
      faq: {
        title: 'Common Questions.'
      },
      contact: {
      title: 'Hello.',
      text: 'What can I help you with?'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

{/* NAV BAR DETAILS */}
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>
            <img src={ sideImage } alt="profile" width="10%" class="sideImage"/>
            </Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/faq">FAQ</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

{/* ROUTES - IMPORTED */}
          <Route path="/" exact render={() => <HomePage subTitle={this.state.home.subTitle} text={this.state.home.text}/>} />

          <Route path="/about" render={() => <AboutPage title={this.state.about.title}/>} />

          <Route path="/faq" render={() => <FAQPage title={this.state.faq.title}/>} />

          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} text={this.state.contact.text}/>} />

{/* FOOTER - IMPORTED */}
          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
