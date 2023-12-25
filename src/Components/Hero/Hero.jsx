import './Hero.css'
import arrow_btn from '../../assets/Assets/arrow_btn.png'
import play_icon from '../../assets/Assets/play_icon.png'
import pause_icon from '../../assets/Assets/pause_icon.png'

const Hero = ({heroData,setHeroCount,heroCount,setPlayStatus,playStatus}) => {
    return(
      <div className='hero'>
        <div className="hero-text">
            <p>Dive into What you love</p>
            <p>Indulge your passion.</p>
        </div>
        <div className="hero-explore">
            <p>Explore these features</p>
            <img src={arrow_btn} alt="" />
        </div>
        <div className="hero-dot-play">
            <ul className="hero-dots">
                <li onClick={()=> setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
                <li onClick={()=> setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
                <li onClick={()=> setHeroCount(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
            </ul>
        </div>
        <div className="hero-play">
            <img onClick={()=> setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} alt="" />
            <p>Check the video</p>
        </div>
      </div>
    )
  }
  
  export default Hero