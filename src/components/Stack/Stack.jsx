import React from 'react';
import './Stack.css';

const Stack = ({ children, type }) => {
  return (
    <ul className={`stack stack_type_${type}`}>
      {children}
    </ul>
  );
};

export default Stack;
