import logo from '../assets/img/aao-logo-colour.png';
import SideBar from './SideBar'

const ComingSoon = () => {

    const redirectToPage = () => {
        window.open('https://www.facebook.com/events/402233797817511')
    }

    return (
        <div>
           
          
            
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            
            <p>
                Coming soon! 11 Dec 2020
            </p>
                
            <button className="primary-button rsvp-button" onClick={redirectToPage}>RSVP Now</button>

             </header>

            <SideBar />
        </div>
    )
}

export default ComingSoon