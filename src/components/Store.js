import { useState } from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView/CardsView";
import ListView from "./ListView/ListView";

export default function Store() {
  const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }];

  let [iconName, changeStateIcon] = useState('view_list');

  let changeIcon = (oldIcon) => {
    changeStateIcon(oldIcon == 'view_list' ? 'view_module' : 'view_list');
  }

  let storeView;

  if (iconName == 'view_list') {
    storeView = <CardsView cards={products}/>
  } else {
    storeView = <ListView items={products}/>
  }

  return (
    <div className="store-container">
      <IconSwitch
        icon={iconName}
        onSwitch={changeIcon}
      />
      {storeView}
    </div>
  )
}