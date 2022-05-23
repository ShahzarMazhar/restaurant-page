import { $, $_, addAttribute, addAttributes, createElements } from "../../modules/basics";
import { changeTabEvent } from '../../modules/tabs-management';

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
function createNavItems(menuItems){
    let output;
    if(menuItems.length > 0){
        const [button, span, ul, div] = createElements('button', 'span', 'ul', 'div');

        addAttributes(button, {
            class: 'navbar-toggler',
            type: 'button',
            'data-bs-toggle':'collapse',
            'data-bs-target': '#navbarNav',
            'aria-controls': 'Toggle navigation'
        });
        span.className = 'navbar-toggler-icon';
        button.appendChild(span);

        addAttributes(div, {
            id: 'navbarNav',
            class: 'collapse navbar-collapse'
        })
        ul.className = 'navbar-nav ms-auto mb-2 mb-lg-0';

        div.appendChild(ul);

        menuItems.forEach(item => {
            const [li, a] = createElements('li', 'a');
            const id = `link-${item[0]
                                .toLowerCase()
                                .trim()
                                .replace(' ', '-')
                            }`;

            item[2] = id;
            li.className = 'nav-item text-center ';

            addAttributes(a, {
                href: item[1] || '#',
                id: id,
                class: 'nav-link'
            })

            a.textContent = item[0];
            a.addEventListener('click', changeTabEvent);

            li.appendChild(a);
            ul.appendChild(li);
        });

        output = [button, div];
    }
    return output;
}

function createNavbar(brandName, ...menuItems){
    const [navbar, container, navbar_brand, brand_name] = createElements('nav', 'div', 'a', 'h1');

    addAttribute('class',
        [navbar, 'navbar navbar-expand-lg sticky-top navbar-dark bg-primary'],
        [container, 'container-xl'],
        [navbar_brand, 'navbar-brand'],
    );

    navbar_brand.setAttribute('href', '/');

    if(brandName){
        brand_name.textContent = brandName;
        navbar_brand.appendChild(brand_name);
        container.appendChild(navbar_brand)
    }

    navbar.appendChild(container);

    if(menuItems.length > 0){

        const NavItems = createNavItems(menuItems);

        container.append(...NavItems);
    }

    return navbar;
};

function activeNavLink(selector){
    const links = $_('nav .active');
    const link = $(`nav ${selector}`);
    
    if(links !== null){
        links.forEach(link => {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        })
    }
    if(link !== null){
        link.classList.add('active');
        link.setAttribute('aria-current', 'page')
    }
        
}

export {$, createNavbar, activeNavLink};