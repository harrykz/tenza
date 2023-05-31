import PersonAvatar from '../images/pexels-alexander-paul-16881386-cropped.jpg';

function CardTwo(){
    return(
        <div>
            <img src={PersonAvatar} className='card--image' />
            <h2 className='card--person_name'>ALexandar Paul</h2>
            <h4 className='card--person_occupation'>Pet Owner</h4>
            <h6 className='card--person_web'>alexandar_paul.com</h6>
        </div>
    )
}

export default CardTwo;