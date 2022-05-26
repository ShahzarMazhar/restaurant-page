/*
 * Module: Body Component
 * Responsibility: This component module is for appending navbar on page and making placeholder for content
 */

import { brandName, menuItems } from "../../modules/data";
import { $, createElementsByClassName } from "../../modules/basics";
import { createNavbar } from "./navbar";
import createFooter from "./footer";

function loadBody() {
  const container = $("#container");
  const body = $("body");

  const navbar = createNavbar(brandName, ...menuItems);
  const contentPlaceHolder = createElementsByClassName([
    "main",
    "main ",
  ]);
  const footer = createFooter();

  container.append(navbar, contentPlaceHolder);
  body.appendChild(footer)
}

export { loadBody };
