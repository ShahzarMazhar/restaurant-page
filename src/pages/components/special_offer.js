/*
 * Module: Special Offer Component
 * Responsibility: This component module is for creating navbar and activating links on it, when called
 */

import {
  setTextContent,
  createElementsByClassName,
  bulkAppend,
} from "../../modules/basics";

function createSpecialOffer(item) {
  const [
    container,
    head,
    head_text,
    head_heading,
    body,
    image_place,
    card,
    card_body,
    card_heading,
    card_subHeading,
    card_text,
    card_btn,
  ] = createElementsByClassName(
    ["section", "offer container-md mt-5"],
    ["div", "row align-items-center justify-content-center text-center"],
    ["p", "text-secondary"],
    ["h3", "text-primary"],
    ["div", "row align-items-center"],
    ["div", "offer-img col-lg-7"],
    ["div", "offer-card col-lg-4 col-10 bg-primary p-3"],
    ["div", "border-dashed border p-3 text-light"],
    ["h3", ""],
    ["h5", ""],
    ["p", "lead fs-6"],
    ["button", "btn btn-secondary text-light"]
  );

  const img = new Image(1080, 720);
  img.className = "img-fluid";
  img.setAttribute("alt", "Offer Image");
  img.src = item.image;

  setTextContent(
    [head_text, "Offer"],
    [head_heading, "Special Offer For You"],
    [card_heading, item.heading],
    [card_subHeading, item.subHeading],
    [card_text, item.text],
    [card_btn, "Order Now"]
  );

  bulkAppend(
    container,
    [head, [head_text], [head_heading]],
    [
      body,
      [image_place, [img]],
      [
        card,
        [card_body, [card_heading], [card_subHeading], [card_text], [card_btn]],
      ],
    ]
  );
  return container;
}

export { createSpecialOffer };
