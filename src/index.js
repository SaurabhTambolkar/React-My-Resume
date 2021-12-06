import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import './styles.css';
import Nevigation from './nevigation';
import App from './App';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Awards from './Awards';
import Projects from './Projects';
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <App />,
  document.getElementById('til')
);

ReactDOM.render(
    <Nevigation />,
  document.getElementById('sideNav')
);

ReactDOM.render(
    <About />,
  document.getElementById('about')
);

ReactDOM.render(
    <Experience />,
  document.getElementById('experience')
);


ReactDOM.render(
    <Education />,
  document.getElementById('education')
);

ReactDOM.render(
    <Skills />,
  document.getElementById('skills')
);


ReactDOM.render(
    <Awards />,
  document.getElementById('awards')
);

ReactDOM.render(
    <Projects />,
  document.getElementById('projects')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
