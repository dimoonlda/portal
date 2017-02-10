import React from 'react';
import {browserHistory} from 'react-router';

import {Header} from 'Header';
import {Navigation} from 'Navigation';
import Footer from 'Footer';

export class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
/*        if (this.props.accessToken) {
            browserHistory.push('/portal');
        } else {
            browserHistory.push('/login');
        }*/
    }

    render(){
        return (
            <div>
                <Header/>
                <div className="row">
                    <div className="medium-12 columns" role="content">
                        {this.props.children}
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}