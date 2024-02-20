import "./Card.scss"
const Card = ({item}) => {

    return(
        <a href={`/product/${item.itemCode}`}>
            <div className="card">
                <img className="card-image" src={item.imageLink} alt="book image"></img>
                <h2 className="card-title">{item.name}</h2>
                <p className="card-text">{item.author}</p>
                <p className="card-price">{item.price}$</p>
                <button>Buy</button>
            </div>
        </a>
    )
}

export default Card