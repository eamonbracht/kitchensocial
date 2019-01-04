import React, {Component} from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './components/Layout';
import Survey from './pages/Survey';



class App extends Component {

    render() {
        return (
          <BrowserRouter>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Survey" component={Survey} />
          </Layout>
        </BrowserRouter>
        );
    }
}

export default App;