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



function BookList(){
  return (
   <section className="booklist">
    <Book/>
    <Book/>
    <Book/>
   </section>    
  );
}

const Book = () =>{
  return(
    <article className="book">
      <Image> </Image>
      <Title/>
      <Author/>
    </article>
  )
}

const Image = () => (
<img src="https://m.media-amazon.com/images/I/51+YL7KXjtL._AC_UL320_.jpg" alt="" />
);

const Title =() => <h2>The Ultimate Tea Guide: A Detailed List of 60+ Tea Varieties, including Health Benefits & Steeping</h2>
// inline CSS
const Author = () => <h4 style={{color:'#617d98',fontSize: '0.75rem', marginTop: '0.25rem' }}>Kathleen Rao</h4>

ReactDom.render(<BookList/>, document.getElementById('root'));
