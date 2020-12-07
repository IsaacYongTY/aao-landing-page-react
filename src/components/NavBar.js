import SocialMediaHandle from './SocialMediaHandle'


const NavBar = () => {

    const toggleSidebar = () => {
        document.querySelector('.sidebar').setAttribute('class', 'sidebar active')
        document.querySelector('.sidebar-screen.hidden').setAttribute('class', 'sidebar-screen active')
    }
    return (
        <div className="navigation-bar"> 

            <div className="menu-button-container">
                <button onClick={toggleSidebar} className="menu-button" />
            </div>

            <SocialMediaHandle />

        </div>

    )
}

export default NavBar




            