/*
 * Module: Price List Component
 * Responsibility: This component module is for creating price list, when called
 */

import {
  createElementsByClassName,
  bulkAppend,
  setTextContent,
  addAttributes,
} from "../../modules/basics";
import { pageHeaderImage } from "../../modules/data";

function createPriceList(products) {
  const [container, content, header, sub_heading, heading, body] =
    createElementsByClassName(
      ["section", "menu container_fluid "],
      [
        "div",
        "d-flex flex-column bg-light bg-opacity-75 pt-5 align-item-center justify-content-center",
      ],
      ["div", "row text-center w-100"],
      ["p", "text-secondary fs-5"],
      ["h3", "text-primary h2"],
      ["div", "d-flex body flex-wrap justify-content-center py-2 gap-3"]
    );

  setTextContent([heading, `Let's Check Our Menu`], [sub_heading, "Our Menu"]);

  container.style.backgroundImage = `url(${pageHeaderImage.default})`;

  products.forEach((product) => {
    const [card, card_body, image_place, info, title, description, price] =
      createElementsByClassName(
        ["div", "card rounded-0 border-0 "],
        ["div", "card-body d-flex align-items-center  p-3"],
        ["div", "card-image rounded-circle"],
        ["div", "info flex-grow-1 ms-2"],
        ["h4", "card-title  text-primary"],
        ["p", "card-text lead fs-6 text-black-50"],
        ["p", "price card-text text-primary fs-5 px-3"]
      );

    const img = new Image(75, 75);

    addAttributes(img, { src: product.image.w200, class: "rounded-circle m-1" });

    setTextContent(
      [title, product.name],
      [description, `Awesome ${product.name}`],
      [price, `$${product.price}`]
    );

    bulkAppend(body, [
      card,
      [
        card_body,
        [image_place, [img]],
        [info, [title], [description]],
        [price],
      ],
    ]);
  });

  bulkAppend(container, [content, [header, [sub_heading], [heading]], [body]]);
  return container;
}

export default createPriceList;
