import React from 'react'

const Footer = () => {
  return (

    
    <div className='footer'>
        
        <div className='footercontent'>


            <div className='footerTitle'>
                <img className = 'ticketIcon' src = 'https://th.bing.com/th/id/R.376d5eb97e12141142e1b2eceeac7c5b?rik=gOOTjBC7wsgACQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fticket-clipart-transparent%2fticket-clipart-transparent-9.png&ehk=2acrXCfUVQO76QJMLvl64%2fJtgNmSrXR6AGSPZVmJcic%3d&risl=&pid=ImgRaw&r=0' alt = ''></img>
                <h1>NFTickets</h1>
            </div>

            <div className='copyright'>
                 <p className='copyrightText'>© 2022 NFTickets Inc. All rights reserved.</p>
            </div>


            <div className='socials'>

                <img className='facebookIcon' src = 'src/images/Social Media Icons/facebook.png' alt = 'fb'></img>
                <img className='instagramIcon' src = 'src/images/Social Media Icons/instagram.png' alt = 'insta'></img>
                <img className='twitterIcon' src = 'src/images/Social Media Icons/twitter.png' alt = 'twit'></img>
                <img className='youtubeIcon' src = 'src/images/Social Media Icons/youtube.png' alt = 'yt'></img>
                <img className='linkedinIcon' src = 'src/images/Social Media Icons/linkedin.png' alt = 'linkedIn'></img>

            </div>


        </div>

    </div>
  )
}

export default Footer