export default function ShopItem({ product }) {
  return (
    <div className="shop-item">
      <img src={product.img} alt={product.name} className="shop-item__img" />
      <p className="shop-item__name">{product.name}</p>
      <p className="shop-item__color">{product.color}</p>
      <p className="shop-item__price">${product.price}</p>
      <button className="shop-item__button">Add to card</button>
    </div>
  )
}