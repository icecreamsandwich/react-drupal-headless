import React, { Component } from 'react';
import myContext from './Context';
import MyConsumer from './MyConsumer';

class Myprovider extends Component {
    state = {
        name: 'AAron',
        class: '4',
        grade: 'A',
        cool: true,
        person2_grade : 'B',
        counter : parseInt(localStorage.getItem("counter")) || 1
    }
   
    render() {
        return (
            <div>
                <myContext.Provider value={{
                    state: this.state,
                    IncrementCounter: () =>{
                        this.setState({
                            counter : this.state.counter+1 
                        })
                        var counterInt = parseInt(this.state.counter)
                        localStorage.setItem("counter",counterInt)
                    },
                    ChangePersonGrade : () => {
                        this.setState({
                            person2_grade : 'C',
                        })
                    },
                    makeitHot : () =>{
                        if(this.state.cool === true) var coolBool= false;
                        else coolBool = true;
                        this.setState({
                            cool : coolBool
                        })  
                    }
                }} >
                    {this.props.children}   
                    <MyConsumer />
                </myContext.Provider>
            </div>
        );

    }
}

export default Myprovider;