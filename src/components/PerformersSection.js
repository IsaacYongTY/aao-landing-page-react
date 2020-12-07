import AliceCarousel from 'react-alice-carousel'

import CarouselCard from './CarouselCard'
import curryPop from '../assets/img/carousel/CurryPop.jpg'
import isaac from '../assets/img/carousel/Isaac.jpg'
import meiTing from '../assets/img/carousel/Meiting-1.jpg'
import tingZhi from '../assets/img/carousel/Tingzhi-3.jpg'
import yokez from '../assets/img/carousel/Yokez.jpg'
import ken from '../assets/img/carousel/Ken.jpg'

// Write Ups //


const kenWriteUp = `An experienced and prolific host, Ken Low (Ah Ken) is currently an executive digital content producer and presenter for zaobao.sg under Singapore Press Holdings. With 11 years of media experience under his belt, he has hosted press conferences and artiste showcases of various international celebrities including Hyun Bin, Lee Seung Gi, TWICE, SNSD, Eason Chan, JJ Lin and Stefanie Sun. 
He was the leading host for one of Singapore’s biggest media award shows, “Singapore Entertainment Awards 新加坡e乐大赏” four years in a row at Marina Floating Platform, Singapore Indoor Stadium, and Legacy, Taipei. He was also invited to be the leading host for Global Chinese Golden Chart at Taipei Arena in 2011. `


const curryPopWriteUp = `Inspired by a local Singaporean delight, the curry puff (also known endearingly to the locals as curry pok), CurryPop was born in 2016. An acoustic duo that comprises of Daniel Ong and Seow Ting, they have released two of their original compositions on digital platforms. Their first single “只要你愿意” was featured in the first episode of SPH zaobao.sg 创新声 online programme and arranged by renowned producer George Leong, while their second single “阿嬷的歌” clinched the top prize of 艺心一意创作比赛, organised by Singapore Hospice Council and zaobao.sg. `


const yokezWriteUp = `With sweet vocals and a bright personality, Yokez has been winning over crowds with her positive energy. In June 2018, she released her debut 5-track self-penned Mandopop EP, with her duet love song “你的出现” entering the Spotify Top 50 Viral Tracks Malaysia All Genre Chart. Till date, the EP has been streamed over 1.5 million times on Spotify. In 2019, she sang “你有没搞懂”, the OST of Chinese web drama “我的盖世英雄”. In 2020, she released her latest co-written single “爱蒸发”.`


const meiTingWriteUp = `OHMYMEITING often writes about the small details in life and injects humour into her original work. After releasing three digital singles in 2016, she launched her debut EP “别担心！我不是坏人” in June 2018 at the Esplanade Recital Studio, with one of the tracks  “住在天狼星的那个人" hitting StreetVoice charts at #1. OHMYMEITING was featured in zaobao.sg's “创新声” online programme in October 2018, where she worked with K-pop producer Gen Neo on her original single “巴黎的十二点”, which hit #3 on the Global Chinese Golden Chart after the episode.`


const tingZhiWriteUp = `Hz is a highly versatile Mandopop singer-songwriter who incorporates personal stories in her songwriting. In 2017, she officially debuted with two singles “欢迎光临” and “发了疯的想你”, which led her to a music tour in Taiwan in 2018. In 2019, she released another single “不够”, a heartwarming tribute to her brother. The same year, she collaborated with master producer Jim Lim and introduced a rock ballad “胆小情人”, a refreshing transformation from her usual ballad style. Her first release of 2020, “暂停”, achieved more than 120K Spotify streams within months of release.` 


const isaacWriteUp = `Isaac Yong has received recognition through various competitions, most notably, as the champion of Music Xpress Songwriting Competition in 2015. He has garnered over 100K monthly listeners and over 2 million streams on online platforms such as YouTube, Spotify and KKBox. Also, Jay Chou has shared his cover of “Won’t Cry” on his Instagram stories. In 2018, Isaac held his first ticketed concert “World Through Our Eyes” at Esplanade Singapore. He has released his first original single “Late Night” in 2019. `

const PerformersSection = () => {
    
    const handleDragStart = (e) => e.preventDefault();
 
    const items = [
        
        <CarouselCard performer="CurryPop" 
            writeUp={curryPopWriteUp}
            image={curryPop} 
            onDragStart={handleDragStart} 
            className="performer zero"
            position="50% 0"
        />,
        <CarouselCard performer="Isaac Yong 杨征宇" 
            writeUp={isaacWriteUp} 
            image={isaac} 
            onDragStart={handleDragStart} 
            className="performer zero"
            position="100% 0%"
        />,
        <CarouselCard performer="OHMYMEITING 黄美婷" 
            writeUp={meiTingWriteUp}
            image={meiTing} 
            onDragStart={handleDragStart} 
            className="performer zero"
            position="30% 0%"
        />,
        <CarouselCard performer="黄亭之 Hz" 
            writeUp={tingZhiWriteUp} 
            image={tingZhi} 
            onDragStart={handleDragStart} 
            className="performer zero"
            position="50% 0%"
        />,
        <CarouselCard performer="Yokez 叶玉棂" 
            writeUp={yokezWriteUp}
            image={yokez} 
            onDragStart={handleDragStart} 
            className="performer zero"
            position="27% 0"
        />,  
        <CarouselCard performer="Ken Low 刘永健 (Host)" 
            writeUp={kenWriteUp} 
            image={ken} 
            onDragStart={handleDragStart} 
            className="performer zero"
        />,
        
    // <img src={imageOne} onDragStart={handleDragStart} className="performer one" />,
    // <img src={imageTwo} onDragStart={handleDragStart} className="performer two" />,
    // <img src={imageThree} onDragStart={handleDragStart} className="performer three" />,
    ];
    
   
    

    return (
        <div id="performers" className="performers-section">
            <h1>The Performers <span className="zh">表演艺人</span></h1>
            <AliceCarousel autoPlay={true} 
            animationDuration="800"
            autoPlayInterval="5000" 
            infinite={true}
        
           
            mouseTracking items={items} />

            
        </div>
    )
}

export default PerformersSection