import React, { Component } from 'react';
import materialize from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

import Records from './components/Records'

class App extends Component {
    componentDidMount = () => {
        materialize.AutoInit();
    }

    render = () => {
        return(
            <div className="container">
                <Records />
            </div>
        )
    }
}

export default App;
