import ShopItem from "./ShopItem";

export default function ListView(props) {
  return (
    <div className="store__list-view">
      {props.items.map((item, index) => (
        <ShopItem key={index.toString()} product={item} />
      ))}
    </div>
  )
}