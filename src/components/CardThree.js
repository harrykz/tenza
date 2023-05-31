import PersonAvatar from '../images/pexels-andy-coffie-16864829-cropped.jpg';

function CardThree(){
    return(
        <div>
            <img src={PersonAvatar} className='card--image' />
            <h2 className='card--person_name'>Andy Coffie</h2>
            <h4 className='card--person_occupation'>Athletic Model</h4>
            <h6 className='card--person_web'>andy_coffie.com</h6>
        </div>
    )
}

export default CardThree;