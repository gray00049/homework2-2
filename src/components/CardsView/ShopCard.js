export default function ShopCard({ product }) {
  return (
    <div className="shop-card">
      <p className="shop-card__name">{product.name}</p>
      <p className="shop-card__color">{product.color}</p>
      <img src={product.img} alt={product.name} className="shop-card__img" />
      <div className="shop-card__price-row">
        <p className="shop-card__price">${product.price}</p>
        <button className="shop-card__button">Add to cart</button>
      </div>
    </div>
  )
}