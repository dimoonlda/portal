import React from 'react';

class Login extends React.Component{
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="row">
                <div className="medium-4 small-centered columns">
                    <div className="callout secondary">
                        <h5>Please Sign In</h5>
                        <hr/>
                        <form>
                            <div className="row columns">
                                <input type="text" name="login" onChange={this.props.onChange} placeholder="Login"/>
                            </div>
                            <div className="row columns">
                                <input type="password" name="password" onChange={this.props.onChange} placeholder="Password"/>
                            </div>
                            <div className="row columns">
                                <button type="submit" onClick={this.props.onLogin} className="button expanded">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
};

Login.propTypes = {
    onChange: React.PropTypes.func.isRequired,
    onLogin: React.PropTypes.func
};

export default Login;