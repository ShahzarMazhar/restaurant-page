/*
    This module imports data and images object, data manipulation and export for further use
*/

import data from "../data/data.json";
import images from "./images";

const products = data.products;
const brandName = "Mazhar Iced";
const menuItems = [];
const welcomeItems = addImage(data.welcomeItems);
const offerItem = addImage(data.offerItem);

class MenuItem {
  constructor(name, func) {
    this.name = name;
    this.target = func;
  }

  get href() {
    return `#${this.name.toLowerCase().trim().replace(" ", "-")}`;
  }
  get id() {
    return `page-${this.name.toLowerCase().trim().replace(" ", "-")}`;
  }
}

function getImage(id) {
  let image;
  products.forEach((i) => {
    if (i.id == id) {
      image = i.image;
    }
  });
  return image;
}

function addImage(item) {
  item.image = getImage(item.image);

  return item;
}

function setMenu(name, func) {
  menuItems.push(new MenuItem(name, func));
}

export { brandName, menuItems, setMenu, welcomeItems, images, offerItem };
