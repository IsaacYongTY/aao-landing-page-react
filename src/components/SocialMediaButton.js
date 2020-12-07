

const SocialMediaButton = (props) => (
    
        <a  style={{backgroundImage: "url(" + props.icon + ")", backgroundSize: "contain"}} 
            className="social-media-button" 
            href={props.link} 
            target="_blank"
        >
            
        </a>

)

export default SocialMediaButton