import PersonAvatar from '../images/pexels-elina-volkova-16153000-cropped.jpg';

function CardFour(){
    return(
        <div>
            <img src={PersonAvatar} className='card--image' />
            <h2 className='card--person_name'>Elina Volkova</h2>
            <h4 className='card--person_occupation'>Professional Artist</h4>
            <h6 className='card--person_web'>elina_volkova.com</h6>
        </div>
    )
}

export default CardFour;