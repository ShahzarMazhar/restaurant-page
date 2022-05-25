/*
 * Module: Body Component
 * Responsibility: This component module is for appending navbar on page and making placeholder for content
 */

import { brandName, menuItems } from "../../modules/data";
import { $, createElementsByClassName } from "../../modules/basics";
import { createNavbar } from "./navbar";

function loadBody() {
  const container = $("#container");

  const navbar = createNavbar(brandName, ...menuItems);
  const contentPlaceHolder = createElementsByClassName([
    "main",
    "main ",
  ]);

  container.append(navbar, contentPlaceHolder);
}

export { loadBody };
