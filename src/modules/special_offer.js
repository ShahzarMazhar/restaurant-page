import {
  setTextContent,
  createElementsByClassName,
  bulkAppend,
} from "./basics";
import images from "./images";

/*  
<section class="offer container-md">
<div class="row align-items-center justify-content-center text-center">
  <p class="text-secondary">Offer</p>
  <h3 class="text-primary">Special Offer For You</h3>
</div>
<div class="row align-items-center">
  <div class="offer-img col-lg-7">
    <img
      src="https://via.placeholder.com/1080x720"
      class="img-fluid"
      alt=""
    />
  </div>
  <div class="offer-card col-lg-4 col-10 bg-primary p-3">
      <div class="border-dashed border p-3 text-light">
        <h3>Cherry Vanilla Ice Cream</h3>
        <h5>Get 40% Offer</h5>
        <p class="lead fs-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          beatae necessitatibus sint pariatur voluptatum similique, ullam
          iure quidem, accusantium
        </p>
        <button class="btn btn-secondary text-light" type="button">
          Order Now
        </button>
      </div>
  </div>
</div>
</section>
*/

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
  img.src = images[item.image.filename];

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
