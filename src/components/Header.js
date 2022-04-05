import React from 'react'

const Header = () => {
  return (
    
    <div className = 'Header'>

        
        <div className='title'>
            <img className = 'ticketIcon' src = 'https://th.bing.com/th/id/R.376d5eb97e12141142e1b2eceeac7c5b?rik=gOOTjBC7wsgACQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fticket-clipart-transparent%2fticket-clipart-transparent-9.png&ehk=2acrXCfUVQO76QJMLvl64%2fJtgNmSrXR6AGSPZVmJcic%3d&risl=&pid=ImgRaw&r=0' alt = ''></img>
            <h1>NFTickets</h1>
        </div>

        <div className='navBar'>
             
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#concerts">Concerts</a></li>
                <li><a href="#sports">Sports</a></li>
              
                <input type="text" placeholder="Search.."></input>

            </ul> 

        
             <div className = 'Login'>

                <button className='loginButton'>

                    <img src = 'src/images/login.png' alt = ''/>
                    <a href = 'Login'>Login</a> 
                </button>

             </div>
        
        
        
        </div>

        

    </div>
  )
}

export default Header