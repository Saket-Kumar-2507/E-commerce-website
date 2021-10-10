import React from 'react';
import Header from '../Header';

/**
* @author
* @function Layout 
**/

// {props.children} means all the content inside a tag.
// for example:
// <Saket>
//      <div>
//          <h1> Hello </h1>
//          <p> This is saket </p>
//      </div>
// </Saket>

// So in the above case, for "Saket" tag, its props.children are the tags inside of it

const Layout = (props) => {
  return(
    <div>
        <Header/>
        {props.children}                    
    </div>
   )

 }

export default Layout;