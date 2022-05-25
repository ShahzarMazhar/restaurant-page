/*
 * Module: Data Management
 * Responsibility: Manage data i.e BrandName, Images, products etc
 */

import data from "../data/data.json";

(() => {
  const r = require.context("../assets/images", false, /\.(png|jpe?g|svg)$/);
  const images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  data.products.forEach((product) => {
    product.image = images[product.filename];
  });
})();

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

const brandName = "Mazhar Iced";
const products = data.products;
const menuItems = [];
const offerItem = addImage(data.offerItem);
const welcomeItems = addImage(data.welcomeItems);
const pageHeaderImage = products[2].image;

export { brandName, menuItems, setMenu, welcomeItems, products, offerItem, pageHeaderImage };
