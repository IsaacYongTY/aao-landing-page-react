

const TeaserSection = () => {


    return (
        <div id="about" className="teaser-section">
            <h1>Who Are We <span className="zh">关于我们</span></h1>

            <div className="teaser-video">
                <iframe  className="responsive-iframe" width="1280" height="720" 
                    src="https://www.youtube.com/embed/videoseries?list=PL020eiw54OmekQIqZ0LPW-vPzImI0I0US" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    >
                </iframe>
            </div>
            

            
           
        </div>
    )
}

export default TeaserSection