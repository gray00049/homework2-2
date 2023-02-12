import ShopCard from './ShopCard';

export default function CardsView(props) {
  return (
    <div className="store__cards-view">
      {props.cards.map((card, index) => (
        <ShopCard key={index.toString()} product={card} />
      ))}
    </div>
  )
}