const RSVPButton = (props) => {

    const redirectToPage = () => {
        window.open(props.url)
    }

    return (
        <div className ="navbar-button-container">
            <button className="primary-button rsvp-button" onClick={redirectToPage}>{props.name}</button>
        </div>        
    )   
}

export default RSVPButton