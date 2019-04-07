import React from 'react';

const Layout = ({title, children}) => (
  <div> 
    <h1> {title} </h1>
    <div> {children} </div>
  </div> 
);

export default Layout;
