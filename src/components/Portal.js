import { Component } from 'react';
import ReactDom from 'react-dom';

const portalroot = document.getElementById('portal');
class Portal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
  componentDidMount() {
    portalroot.appendChild(this.el);
  }

  componentWillUnmount() {
    portalroot.removeChild(this.el);
  }

  render() {
    //const{children} = this.props;
    return ReactDom.createPortal(this.props.children, this.el);
  }
}

export default Portal;
