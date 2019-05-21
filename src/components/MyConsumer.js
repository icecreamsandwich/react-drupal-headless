import React, { Component } from 'react';

import myContext from './Context';
import Person2 from './children/Person2';
    
class MyConsumer extends Component {
    render() {
        return (
            <div>
              <myContext.Consumer>
                    {
                        (context) => (
                            <React.Fragment>
                                {/* <p>Name : {context.state.name}</p>
                                <p>Grade : {context.state.grade}</p>
                                <p>Class : {context.state.class}</p>
                                <p>Counter : {context.state.counter}</p> */}
                                <Person2 value={context}/>
                                {/* <button onClick={context.IncrementCounter}>Increment Counter</button> */}
                            </React.Fragment>
                        )
                    }
                </myContext.Consumer>  
            </div>
        );
    }
}

export default MyConsumer;