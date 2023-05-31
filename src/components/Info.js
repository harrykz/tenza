import PersonAvatar from '../images/pexels-reign-martinez-15964785-cropped.jpg';

function Info(){
    return(
        <div>
            <img src={PersonAvatar} className='card--image' />
            <h2 className='card--person_name'>Reign Martinez</h2>
            <h4 className='card--person_occupation'>Professional Model</h4>
            <h6 className='card--person_web'>reign_martinez.com</h6>
        </div>
    )
}

export default Info;