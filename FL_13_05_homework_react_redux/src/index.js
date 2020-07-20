import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const COURSES = [
  { date: "18.02.18", name: "Prerequisites", description: "Webpack, AngularCLI, TypeScript.", duration: "1:34" },
  { date: "01.02.18", name: "Components", description: "Components; lifecicle, templete DSL and data-binding, Custom component.", duration: "2:10" },
  { date: "15.01.18", name: "Directives + Pipes", description: "Directives, types pf directives, built-in directives, custom directive, pipes, built-in pipes, custom pipes, async pipe...", duration: "1:34" },
  { date: "28.12.17", name: "Modules & Services", description: "Services, DI, modules, lazy Loading.", duration: "10:00" },
  {date: '', name: '', description: '', duration: ''},
];

ReactDOM.render(<App />, document.getElementById('root'));

