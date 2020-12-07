import SideBarCard from './SideBarCard'

const SideBar = () => {
    const closeSideBar = () => {

        document.querySelector('.sidebar.active').setAttribute('class', 'sidebar hidden')
        document.querySelector('.sidebar-screen.active').setAttribute('class', 'sidebar-screen hidden')
    }

    return (
    
        <div className="sidebar">
            <div className="close-button-container">
                <button onClick={closeSideBar} className="close-button">Close</button>
            </div>
            
            <SideBarCard title="Home" chineseTitle="首页" link="#" className="sidebar-card one"/>
            <SideBarCard title="About This Concert" chineseTitle="音乐会简介" link="#about" className="sidebar-card two"/>
            <SideBarCard title="The Performers" chineseTitle="表演艺人" link="#performers" className="sidebar-card three"/>
            <SideBarCard title="Wall of Encouragement" chineseTitle="加油墙" link="#wall-of-encouragement" className="sidebar-card four" />
            
        </div>
    )
}




export default SideBar