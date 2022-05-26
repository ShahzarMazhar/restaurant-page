/*
 * Module: Special Offer Component
 * Responsibility: This component module is for creating navbar and activating links on it, when called
 */

import {
  setTextContent,
  createElementsByClassName,
  bulkAppend,
  createElements
} from "../../modules/basics";
import { pageHeaderImage } from "../../modules/data";



function createAboutBody(item) {
  const [
    container,
    body,
    image_place,
    card,
    card_body,
    card_subHeading,
    card_heading,
    card_text,
    card_list,
    card_btn,
  ] = createElementsByClassName(
    ["section", "about container-fluid g-0"],
    ['div', 'd-lg-flex h-100 align-items-center bg-light bg-opacity-75 justify-content-center'],
    ["div", "about-img col-lg-5 pt-5 px-sm-5 p-lg-0 ms-auto"],
    ["div", "about-text col-lg-5 px-sm-5  ps-3  me-auto"],
    ["div", "p-3 text-dark"],
    ["p", "text-secondary"],
    ["h2", "text-primary"],
    ["p", "lead fs-5"],
    ["ul", ""],
    ["button", "btn btn-secondary text-light"]
  );

  const listItems = ['ec solicitude nisi Sed erat sem, vestibule', 'erat sem, vestibule ut sodalist sed', "biennium non enid a, gravid portal"];


  listItems.forEach(item => {
    const li = createElements('li');
    li.className = 'lead fs-5';
    li.textContent = item;

    card_list.appendChild(li);
    
  });

  const img = new Image(1080, 720);
  img.className = "img-fluid";
  img.setAttribute("alt", "Offer Image");
  img.src = item.image.default;

  setTextContent(
    [card_heading, "Mazhar Iced Is The Best Place For Tasty Ice Cream"],
    [card_subHeading, "About"],
    [card_text, item.text],
    [card_btn, "Discover More"]
  );

  container.style.backgroundImage = `url(${pageHeaderImage.default})`

  bulkAppend(
    container,[body,
      [image_place, [img]],
      [
        card,
        [card_body, [card_subHeading], [card_heading], [card_text], [card_list], [card_btn]],
      ],]
  );
  return container;
}

export { createAboutBody };
