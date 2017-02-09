import React from 'react';

import {Navigation} from 'Navigation';

class MainPortal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <aside className="medium-2 large-2 columns">
                        <Navigation/>
                    </aside>
                    <div className="medium-10 large-10 columns" role="content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPortal;