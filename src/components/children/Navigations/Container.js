import React, { Component } from 'react';
import Header from './Header';
import LeftNav from './LeftNav';
import RightNav from './RightNav';
import Footer from './Footer';
import Routes from '../../Routes';
import ErroCatcher from '../../ErrorCatcher';

class Container extends Component {
    render() {
        return (
            <div>
                <Header />
                <LeftNav />
                <ErroCatcher>
                    <Routes />
                </ErroCatcher>
                <RightNav />
                <Footer />
            </div>
        );
    }
}


export default Container;