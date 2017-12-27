// @flow
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {auth, provider, providerGoogle} from './components/firebase/index.js'
import Home from './components/home/index.js'
import About from './components/about/index.js'
import logo from './logo.svg';

import 'semantic-ui/dist/components/reset.css'
import 'semantic-ui/dist/semantic.min.css'
import 'semantic-ui/dist/components/icon.css'
import 'semantic-ui/dist/components/segment.css'
import 'semantic-ui/dist/components/button.css'
import 'semantic-ui/dist/components/menu.css'
// import './App.css';

type Props = {
    /* */
}

type State = {
    user: string,
    activeLink: string,
    loginStatus: number
}

class App extends Component<Props, State> {
    state = {
        activeLink: 'archive'
    }


    render() {
        const navLinks = [
            ['archive','/'],
            ['about','/about']
        ]

        return (
            <div className='App'>
                    <img src={logo} className='App-logo' alt='logo' />
                <Router>
                    <div>
                        <div>
                            <Route
                                path="/About/"
                                render={(props) => <About {...props} />}
                            />
                            <Route
                                exact
                                path="/"
                                render={(state) => <Home user={this.state.user ? this.state.user.displayName : 'Stranger'} />}
                            />
                        </div>
                        <div className="ui secondary pointing menu">
                            {navLinks.map((navPoint) => {
                                return(
                                    <Link
                                        to={navPoint[1]}
                                        key={navPoint[1]}
                                    >
                                        <div
                                            onClick={() => this.setState({activeLink: navPoint[0]})}
                                            className={`item ${this.state.activeLink === navPoint[0] ? 'active' : ''}`}
                                        >
                                            {navPoint[0]}
                                        </div>
                                    </Link>
                                )
                            })}

                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
