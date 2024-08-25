import "../Products/proudcts.css"
import { BsFillBagHeartFill } from "react-icons/bs";


 function Card({img,title, star,reviews,prevPrice,newPrice}) {
  return (
    <section className="card">
    <img src= {img}  alt={title} className="card-imge"/>
     <div className="card-details">
      <h3 className="card-title">{title}</h3>

      <section className="card-reviews">
      {star}
      <span className="total-reviews">{reviews}</span>
      </section>

      <section className="card-price">
        <div className="price">
          <del>{prevPrice}</del> : ${newPrice}
        </div>
        <div className="bag">
        <BsFillBagHeartFill className="bag-icon" />
        </div>
    
      </section>
     </div>
  </section>
  )
}

export default Card;
