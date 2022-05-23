import { bulkAppend, createElementsByClassName } from "../../modules/basics";
import { images } from "../../modules/data";


/*
<div class="container col-xxl-10">
  <div class="row  flex-lg-row-reverse align-items-center justify-content-center g-5 py-5">
    <div class="col-10 col-sm-10 col-lg-6">
      <img src="{img}" class="d-block mx-lg-auto img-fluid" alt="Cover Image" width="700" height="500" loading="lazy">
    </div>
    <div class="col-lg-6">
      <h3 class="display-7 fw-bold lh-1">Welcome to Mazhar Iced</h3>
      <h1 class="display-2 fw-bold lh-1 mb-3">Amazing Tasty Ice Cream for You</h1>
      <p class="lead">Integer nec solicitude nisi. Sed erat sem, vestibule ut sodalist sed, varies eu nullo. Aeneas ex ex, biennium non enid a, gravid portal ex.</p>
      <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        <button type="button" class="btn text-light btn-primary  btn-lg px-4 me-md-2">Order Now</button>
        <button type="button" class="btn btn-lg px-4">Learn more</button>
      </div>
    </div>
  </div>
</div>
*/

function createWelcome(brandName, welcome){
    const [ container, row, col_right, col_left, sub_heading, heading, text, btn_group, btn_primary, btn] = createElementsByClassName(
        ['div', 'container col-xxl-10'],
        ['div', 'row  flex-lg-row-reverse align-items-center justify-content-center g-5 py-5'],
        ['div', 'col-lg-6'],
        ['div', 'col-lg-6'],
        ['h3', 'display-7 fw-bold lh-1'],
        ['h1', 'display-2 fw-bold lh-1 mb-3'],
        ['p', 'lead'],
        ['div', 'd-grid gap-2 d-md-flex justify-content-md-start'],
        ['button', 'btn text-light btn-primary  btn-lg px-4 me-md-2'],
        ['btn', 'btn btn-link px-4']
        
        );

    const img = new Image(700, 500);
    img.className = 'd-block mx-lg-auto img-fluid';
    img.setAttribute('alt', 'Cover Image');
    img.setAttribute('loading', 'lazy');
    img.src = images[welcome.image.filename];

    sub_heading.textContent = `Welcome to ${brandName}`;
    heading.textContent = welcome.heading;
    text.textContent = welcome.text;
    btn_primary.textContent = welcome.btn_primary;
    btn.textContent = welcome.btn;

        bulkAppend(container, 
            [row,
                [col_left,
                    [img]
                ], 
                [col_right, 
                    [sub_heading], 
                    [heading], 
                    [text], 
                    [btn_group, 
                        [btn_primary], 
                        [btn]
                    ]
                ]
            ]
            );
return container;
}




export { createWelcome };