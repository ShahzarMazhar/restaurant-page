import {
  $,
  $_,
  addAttribute,
  addAttributes,
  createElements,
} from "../../modules/basics";
import { tabChangeEvent } from "../../modules/tabs-management";


function createNavbar(brandName, ...menuItems) {
  const [navbar, container, navbar_brand, brand_name] = createElements(
    "nav",
    "div",
    "a",
    "h1"
  );

  addAttribute(
    "class",
    [navbar, "navbar navbar-expand-lg sticky-top navbar-dark bg-primary shadow"],
    [container, "container-xl"],
    [navbar_brand, "navbar-brand"]
  );

  navbar_brand.setAttribute("href", "/");

  if (brandName) {
    brand_name.textContent = brandName;
    navbar_brand.appendChild(brand_name);
    container.appendChild(navbar_brand);
  }

  navbar.appendChild(container);

  if (menuItems.length > 0) {
    const NavItems = createNavItems(menuItems);

    container.append(...NavItems);
  }

  return navbar;
}


/*
    <nav class="navbar ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Expand at lg</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
    
          <div class="collapse navbar-collapse" id="navbarsExample05">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
*/



function createNavItems(menuItems) {
  let output;
  if (menuItems.length > 0) {
    const [button, span, ul, div] = createElements(
      "button",
      "span",
      "ul",
      "div"
    );

    addAttributes(button, {
      class: "navbar-toggler",
      type: "button",
      "data-bs-toggle": "collapse",
      "data-bs-target": "#navbarNav",
      "aria-controls": "Toggle navigation",
    });
    span.className = "navbar-toggler-icon";
    button.appendChild(span);

    addAttributes(div, {
      id: "navbarNav",
      class: "collapse navbar-collapse",
    });
    ul.className = "navbar-nav ms-auto mb-2 mb-lg-0";

    div.appendChild(ul);
    menuItems.forEach((item) => {
      const [li, a] = createElements("li", "a");

      li.className = "nav-item text-center ";

      addAttributes(a, {
        href: item.href || "#",
        class: "nav-link",
        "data-target": item.id,
        "data-toggle": "page",
      });

      a.textContent = item.name;
      a.addEventListener("click", tabChangeEvent);
      
      li.appendChild(a);
      ul.appendChild(li);
    });
    
    output = [button, div];
  }
  
  return output;
}

function activeNavLink(target) {
  const links = $_("nav .active");
  const active = $(`nav [data-target=${target}]`);

  if (links !== null) {
    links.forEach((link) => {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    });
  }
  if (active !== null) {
    active.classList.add("active");
    active.setAttribute("aria-current", "page");
  }
}

export { $, createNavbar, activeNavLink };
