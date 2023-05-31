
import TwitterLogo from '../images/twitter-sign.png';
import FacebookLogo from '../images/facebook.png';
import YoutubeLogo from '../images/youtube.png';
import InstagramLogo from '../images/instagram.png';


function SocialFooter(){
    return(
        <div className='card--social_footer_bg'>
            <ul className="card--social_icons">
                <li>
                    <a href="" className=''>
                        <img className="card--social_twitter" src={TwitterLogo}/>
                    </a>
                </li>
                <li>
                    <a href="" className="">
                        <img className='card--social_youtube' src={YoutubeLogo} />
                    </a>
                </li>
                <li>
                    <a href="" className="">
                        <img className='card--social_facebook' src={FacebookLogo} />
                    </a>
                </li>
                <li>
                    <a href="" className="">
                        <img className='card--social_instagram' src={InstagramLogo} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SocialFooter;