/*
 * Module: Data Management
 * Responsibility: Manage data i.e BrandName, Images, products etc
 */

import data from "../data/data.json";
import { random } from "./basics";

(() => {
  const r = require.context("../assets/images", false, /\.(png|jpe?g|svg)$/);
  const images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });

  data.products.forEach((product) => {
    const imagesArray = (images[product.filename]) ? images[product.filename].default.split(" ") :  console.error(`${product.filename} Not Found`);
    const Count = imagesArray.length;
    product.image = {default: imagesArray[Count-1]}

    for (let i = 0; i < imagesArray.length - 1; i = i+2) {
      const imageName = imagesArray[i+1].replace('w,', "");
      product.image[`w${imageName}`] = imagesArray[i]
    }
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

function addPrice(items) {

  //adding prince randomly
  items.forEach(item => {
    item.price = random(9999) / 100;
  });

  return items
}

const brandName = "Mazhar Iced";
const products = addPrice(data.products);
const menuItems = [];
const offerItem = addImage(data.offerItem);
const welcomeItems = addImage(data.welcomeItems);
const pageHeaderImage = products[2].image;

export { brandName, menuItems, setMenu, welcomeItems, products, offerItem, pageHeaderImage };
