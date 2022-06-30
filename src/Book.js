import React from 'react'

//----------------------------------------component book--------------------------------------------------------

const Book = (props) =>{ 
  // object destructuring
  const {img, title, author} = props;
  // attribute, event handler
  // onClick, onMouseOver

  // as reference:
  const eventHandleClick = (e) =>{
    alert('Wait for redirrection')
    console.log(e);
    console.log(e.target)
  }

  const showAuthor = (author)=>{
    console.log(author);
  }
  return(
    <article className="book" onMouseOver = {()=>{
      console.log(title);
    }} >
      <img src= {img} alt="" />
      {/* inline event handling */}
      <h2 onClick={()=>console.log(title)}>{title}</h2>
      <h4>{author}</h4>
      <button type="button" onClick={eventHandleClick}>Buy Now</button>
      {/* make the reference an inline event handler to invoke when clicked */}
      <button type="button" onClick={()=> showAuthor(author)}>Show Author</button>
    </article>
  )
} 

export default Book
