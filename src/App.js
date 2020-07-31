import React from 'react';
import './App.css';
import TestingReturnSyntax from './ChildComponent/TestingReturnSyntax'
import TestingConditionalFormatting from './ChildComponent/TestingConditionalFormatting'

function App() {
  return (
    <div className="App">
      <h1>Test page</h1>
      <br />
      
      <h2>Test various syntax for returning something from a method</h2>
      <TestingReturnSyntax />
      <br />

      <h2> Conditional formatting</h2>
      <TestingConditionalFormatting />
      <br />

    </div>
  );
}

export default App;
