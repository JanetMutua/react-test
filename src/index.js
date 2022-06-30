import React from "react";
import ReactDom from 'react-dom';
//-------------------------------CSS-------------------------------------------
import './index.css'

//-----------------------JS imports------------------------------------------
// named import
import {books} from './books'
// default import
import Book from './Book'


// arrow function
// for reference---------------------------------------------

// const Names = () => {
//   return React.createElement('div', {}, React.createElement('h1', {}, 'hello people'));
// };
// ReactDom.render(<Names/>, document.getElementById('root'));

// ---------------------------------------------------------------


// JSX rules

// 1. return a single element
// 2. div /section / article or React.Fragment
// 3. use camelCase for html attribute
// 4. className instead of class
// 5. close every element
// 6. formatting

// ---------------------------------------------------------------------------------
// capitalize name for react to know its a component
// stateless functional component(dumb component)
//always return JSX
//where js is being injected to the html div hence use render
// ------------------------------------------------------------------------------------

// Nested components, React Tools


// initializing variables into an array.



//-------------------------------------stateless function----------------------------------------------------:

function BookList(){
  return (
   <section className="booklist">
    {books.map((book)=>{
      return (
        // using the smooth operator
      <Book key={book.id} {...book}></Book>
      
      );

    })}
   </section>    
  ); 
} 


ReactDom.render(<BookList/>, document.getElementById('root'));
 