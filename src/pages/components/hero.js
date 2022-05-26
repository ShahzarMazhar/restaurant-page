/*
 * Module: Hero Component
 * Responsibility: creating hero section
 */

import { bulkAppend, createElementsByClassName } from "../../modules/basics";

function createWelcome(brandName, welcome) {
  const [
    container,
    row,
    col_right,
    col_left,
    sub_heading,
    heading,
    text,
    btn_group,
    btn_primary,
    btn,
  ] = createElementsByClassName(
    ["section", "hero container-fluid bg-primary"],
    [
      "div",
      "row  flex-lg-row-reverse col-xl-11 col-xxl-9 mx-auto text-light align-items-center g-5 py-5",
    ],
    ["div", "col-lg-6 text-center text-sm-start"],
    ["div", "col-lg-6"],
    ["h1", "display-7 fw-bold"],
    ["h2", "display-2 fw-bold"],
    ["p", "lead mt-3"],
    ["div", "d-grid gap-2 d-sm-flex justify-content-sm-start"],
    ["button", "btn text-light btn-secondary  btn-lg px-4 me-sm-2"],
    ["button", "btn btn-outline-secondary bg-none btn-lg px-4"]
  );

  const img = new Image();
  img.className = "d-block mx-lg-auto img-fluid";
  img.setAttribute("alt", "Cover Image");
  img.setAttribute("loading", "lazy");
  img.src = welcome.image.default;

  sub_heading.textContent = `Welcome to ${brandName}`;
  heading.textContent = welcome.heading;
  text.textContent = welcome.text;
  btn_primary.textContent = welcome.btn_primary;
  btn.textContent = welcome.btn;

  bulkAppend(container,
    [row,
    [col_left, [img]],
    [
      col_right,
      [sub_heading],
      [heading],
      [text],
      [btn_group, [btn_primary], [btn]],
    ]]);
  return container;
}

export { createWelcome };
