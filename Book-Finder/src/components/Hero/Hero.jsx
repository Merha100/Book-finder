import React from 'react'
import Button from '../button/Button'
import './hero.css'
import { useNavigate } from 'react-router-dom';



 
const multipleButtons= {backgroundColor:"blue", color:"white"}

function Hero() {
  const navigate = useNavigate();
    const handleButtonOne=()=>{
        console.log("click one")
    }
    const handleButtonTwo=()=>{
        console.log("click two")
    }
  return (
    <header>
       <h2>About Find Books</h2>
        <div className='header-container'>
          <p>Finding the perfect book involves exploring your interests and themes that captivate you. Consider genres like mystery, romance, or science fiction. Use resources like book reviews, recommendations, and online platforms such as Goodreads. Visiting local bookstores or libraries can also spark inspiration. Don’t hesitate to explore different genres and authors; unexpected books can leave a lasting impression. If you’re short on time, opt for a novella or short stories. For a deeper dive, choose a longer novel. The joy of reading lies in exploration and discovery, so trust your instincts and enjoy finding a book that speaks to you.</p>
       
   <img className='image-container' src='https://cdn.pixabay.com/photo/2021/01/21/15/54/books-5937716_1280.jpg' />
   </div>
   
   <div className='button-bar'>
   <Button  className="create-button"
            value= "Create Book"
             backgroundColor="#00B0FF"
             color="white"
             handleClick= {()=>navigate('/book/new')} 
         
   />
    <Button  className="create-button"
             value= "learn More"
             backgroundColor="gray"
             color="black"
             handleClick={handleButtonTwo} 
   />
   
   </div>
  
    </header>
  )
}

export default Hero;