import '../assets/stylesheets/application.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

// const Hello = (props) => {
//   const { name } = props;
//   return <h1>Hello {props.name}!</h1>;
// };

// eslint-disable-next-line react/prefer-stateless-function
// class Hello extends Component {
//   // constructor(props) {
//   //   super(props)
//   // }

//   redner() {
//     const { name } = this.props;
//     return <h1>Hello {props.name}!</h1>;
//   }
// }


const root = document.querySelector('#root');
ReactDOM.render(<App />, root);
