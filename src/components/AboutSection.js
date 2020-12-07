import RSVPButton from './RSVPButton'

const AboutSection = () => {

    
        const renderCopy = () => {
            if(window.location.href.indexOf('zh') === -1 ) {
           
                return (<div>
                            <p>To end the year on a positive note 🎼 , 5 independent Singaporean singer-songwriters are coming together for the first
                            time to present "Against All Odds", an intimate virtual Facebook LIVE concert to inspire and encourage YOU with our original music.
                            </p>
                            <p>If you are facing hardship or looking for inspiration during these challenging times, we want to encourage you to keep
                            moving!</p>
                            <p>🏃 Move to take your first step, one step at a time.</p>
                            <p>🏃 Move to inspire your loved ones.</p>
                            <p>🏃 Move towards your goals.</p>
                            <p>If you’d like to learn more about our personal stories behind the songs and how we faced our struggles this year, join us
                            at our live streaming concert on 11 December, 8pm!</p>
                            <p>MOVE along to our music; you might find that everyone is more alike than you have imagined. 😉</p>
                            <p>WE are all in this together 💪</p>
                            <p>Let's get through this, <span className="highlight">Against All Odds.</span></p>
                            <p>To make sure you don't miss out on any updates of our Facebook Live! Event,</p>
                            <p><strong>Click on the RSVP button below and click “going” for the Facebook event</strong></p>
                                                    
                            <p>See you online on <span className="highlight">11 December 2020, 8pm!</span></p>
                            
                    </div>
                )
            }   else {


                return (
                    <div>
                        <p>2020 — 让人乱了阵脚，不知所措的一年。🤕</p>
                        <p>大家都因为疫情而感到焦虑、生气、</p>
                        <p>甚至想要放弃…</p>
                        <p>我们5组本地独立唱作人也不例外。</p>
                        <p>今年已经接近尾声了。</p>
                        <p>我们首次携手合作，</p>
                        <p>筹备了一场《乐过考验》直播音乐会。🎵</p>
                        <p><span className="highlight">12月11日星期五，晚上8点，</span></p>
                        <p>我们想和你分享我们的故事，</p>
                        <p>以原创音乐为2020画上休止符。</p>
                        <p>如果你还处在困境或低迷的情绪中，</p>
                        <p>我们想要鼓励你跨出第一步，</p>
                        <p>勇敢的朝着未来前进！🏃🏻</p>
                        <p>你不需要独自一人面对。</p>
                        <p>让我们一起<span className="highlight">「乐」过考验吧！💪🏻</span></p>
                        <p><strong>点击RSVP并在 FB Events Page 按 "Going"</strong></p>
                        <p>12月11日，星期五晚上8点我们线上见！</p>

                    </div>
                )
            }
        }

    return (
        <div id="about" className="about-section">
            <h1>About This Concert <span className="zh">音乐会简介</span></h1>

            <div className="translation-tab">
                <a href="#about/en" className="english">English</a>
                <a href="#about/zh" className="chinese">中文</a>
            </div>

            {renderCopy()}

            <RSVPButton name="RSVP" />
           
        </div>
    )
}

export default AboutSection