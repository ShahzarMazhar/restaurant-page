/*
 * Module: Page Header Component
 * Responsibility: This component module is for creating header when called
 */

import { pageHeaderImage } from "../../modules/data";
import {
  createElementsByClassName,
  bulkAppend,
  addAttributes,
  setTextContent
} from "../../modules/basics";
import { tabChangeEvent } from "../../modules/tabs-management";

function pageHeader(item, heading_text) {
  const [
    container,
    content,
    heading,
    ol,
    li1,
    a,
    li2,
  ] = createElementsByClassName(
    ["section", "header container-fluid g-0"],
    ['nav', 'd-flex flex-column h-100 align-items-center bg-black bg-opacity-50 justify-content-center'],
    ["h1", "text-light"],
    ["ol", "breadcrumb"],
    ["li", "breadcrumb-item"],
    ["a", ""],
    ["li", "breadcrumb-item active text-light"]
  );

  addAttributes(a, {
    href: "#home",
    "data-target": "page-home",
    "data-toggle": "page",
  });

  a.addEventListener("click", tabChangeEvent);
  container.style.backgroundImage = `url(${pageHeaderImage})`;

  setTextContent(
    [heading, heading_text || item],
    [a, 'Home'],
    [li2, item]
  );

  content.setAttribute('aria-label', 'breadcrumb')
  li2.setAttribute('aria-current', 'page')

  bulkAppend(
    container, [content, [heading],
    [ol, [li1, [a]], [li2]]]
    );
  return container;
}

export { pageHeader };
