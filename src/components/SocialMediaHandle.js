import SocialMediaButton from './SocialMediaButton'

import igLogo from '../assets/img/Instagram.png'
import fbLogo from '../assets/img/Facebook.png'
import telegramLogo from '../assets/img/Telegram.png'
import spotifyLogo from '../assets/img/Spotify.png'

const SocialMediaHandle = () => (

    <div className="social-media-handle-container">
        
            <SocialMediaButton socialMedia="Instagram" icon={igLogo} link="https://www.instagram.com/aaoliveconcert/"/>
            <SocialMediaButton socialMedia="Facebook" icon={fbLogo} link="https://www.facebook.com/aaoliveconcert" />
            <SocialMediaButton socialMedia="Telegram" icon={telegramLogo} link="https://t.me/aaoliveconcert" />
            <SocialMediaButton socialMedia="Spotify" icon={spotifyLogo} link="https://spoti.fi/3pzatDJ" /> 
    </div>
        
        

)

export default SocialMediaHandle
