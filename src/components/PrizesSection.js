import Prize from './Prize'
import prize1 from '../assets/img/prizes/Prizes - Concert 1.jpg'
import prize2 from '../assets/img/prizes/Prizes - Concert 2.jpg'
import prize3 from '../assets/img/prizes/Prizes - FB 1.jpg'
import prize4 from '../assets/img/prizes/Prizes - FB 2.jpg'
const PrizesSection = () => {


    return (
        <div id="about" className="prizes-section">
            <h1>Attractive Prizes to be Won <span className="zh">赢取丰富奖品</span></h1>

            <div className="prizes-container">
                <Prize image={prize1} />
                <Prize image={prize2} />
                <Prize image={prize3} />
                <Prize image={prize4} />
            </div>
            

            
           
        </div>
    )
}

export default PrizesSection