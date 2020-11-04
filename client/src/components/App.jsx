import React, { useState, useEffect } from 'react';

import Banner from './Banner.jsx';
import StretchGoals from './StretchGoals.jsx';
import Content from './Content.jsx';
import Legend from './Legend.jsx';

const App = props => {
  return (
    <div>
      <Banner className="banner"/>
      <StretchGoals className="stretch-goals"/>
      <Content className="content"/>
      <Legend className="legend"/>
    </div>
  );
};

export default App;