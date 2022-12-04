import React from 'react';
import ThemeContext from './ThemeContext';
import D from './ComponentD'
import B from './ComponentB'

const A = () => (
  <ThemeContext.Provider value="red">
    <B />
    <D />
  </ThemeContext.Provider>
);

export default A;