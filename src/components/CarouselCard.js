const CarouselCard = (props) => {
    return (
        <div className="carousel-card">
            <div className="carousel-image-container" style={{backgroundImage: `url(${props.image})`, backgroundSize: "cover", backgroundPosition: `${props.position}`}} >
                
            </div>

            <div className="carousel-write-up-container">
                <h3>{props.performer}</h3>
                <p>{props.writeUp}</p>
            </div>
        </div>
    )
}

export default CarouselCard