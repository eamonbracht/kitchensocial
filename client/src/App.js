import React, {Component} from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './components/Layout';
import Survey from './pages/Survey';
import Show from './pages/Show';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';



class App extends Component {

    render() {
        return (
          <BrowserRouter>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Survey" component={Survey} />
            <Route path="/Responses" component={Show} />
          </Layout>
        </BrowserRouter>
        );
    }
}

export default App;