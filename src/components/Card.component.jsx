
const Card = ({img, text})=>{
    return(
        <div className="card">
        <div className="card__img-container">
            <div className="card__img-overlay"></div>
            <img src={`${img}`} className="card__img" alt="" />
        </div>
        <div className="card__text">
            {text}
        </div>
    </div>
    )
}

export default Card;