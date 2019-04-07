import React from 'react';

const style = {
  margin: '20px'
}

const Layout = ({title, children}) => (
  <div style={style}>
    <h1> {title} </h1>
    <div> {children} </div>
  </div>
);

export default Layout;
