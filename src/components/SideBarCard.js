const SideBarCard = (props) => {

    const closeSideBar = () => {

        document.querySelector('.sidebar.active').setAttribute('class', 'sidebar hidden')
    }

    return (
        <div className={props.className}>
            <a href={props.link} onClick={closeSideBar}>{props.title} <br /><span className="zh">{props.chineseTitle}</span></a>
        </div>
    )

}

export default SideBarCard