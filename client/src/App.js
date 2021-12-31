import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

const T = () => {
  return (
    <div>here</div>
  )
}

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={T} />
    </Router>
  );
}

export default App;