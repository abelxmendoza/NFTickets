import React from 'react'


const Header = () => {
  return (
    <div className='Header'>

       <div className='Title'>
          <ul>
            <li><a href="default.asp">NFTickets</a></li>
          </ul>
       </div>

   
      <div className='navBar'>
       
        <ul>
           <li><a href="default.asp">Concerts</a></li>
           <li><a href="news.asp">Sports</a></li>
           <li><a href="contact.asp">Arts/Theater</a></li>
          <li><a href="about.asp">Family</a></li>
        </ul> 
      
      </div>


      <div className='searchBar'>
        
          <input className='search' type="text" placeholder="Search.."/>
        
      </div>

      <div className='login'>

        <img className='login-icon' src = 'public/images/login.png' alt = 'loginimg'> 
      
        </img>

        <button className='loginButton'> 
          Login
        </button>
      </div>

    </div>

  
  )
}

export default Header