import React, { Component } from 'react';

class ErrorCatcher extends Component {
    constructor(props){
        super(props)
        this.state = {
            error : false,
            errorInfo : null
        }
    }
    
    componentDidCatch(error, info) {
        this.setState({
            error : error,
            errorInfo :info
        })
    }
    render() {
        if(this.state.error){
            //Fallback UI on error catch
            return (
                <div className="error">
                    <h1>Something went Wrong! Reason: {this.state.error}</h1>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }    
            return this.props.children;
    }
}

export default ErrorCatcher;