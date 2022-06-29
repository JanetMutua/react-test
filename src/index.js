import React from "react";
import ReactDom from 'react-dom';
// CSS
import './index.css'

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


// initializing variables
const books = [
  {
    img:'https://images-na.ssl-images-amazon.com/images/I/41rzRPDRxJL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    title:'Where the Crawdads Sing',
    author:'Delia Owens',

  },
  {
    img:'https://m.media-amazon.com/images/I/51+YL7KXjtL._AC_UL320_.jpg',
    title:'The Ultimate Tea Guide',
    author:'Kathleen Rao',
  },
  {
    img:'https://images-na.ssl-images-amazon.com/images/I/41vlc4ugVLL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    title:'Well Always Have Summer ',
    author:'Jenny Han',
  }
];

const names = ['joy', 'alan', 'carey']
const newName = names.map((name) => {
  console.log(name);
});

function BookList(){
  return (
   <section className="booklist">
    {names}
   </section>    
  );
} 

const Book = (props) =>{ 
  // object destrucutring
  const {img, title, author} = props;
  console.log(props);
  return(
    <article className="book">
      <img src= {img} alt="" />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
} 

ReactDom.render(<BookList/>, document.getElementById('root'));
 