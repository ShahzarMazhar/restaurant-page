/*
 * Module: contact form Component
 * Responsibility: This component module is for creating contact form form;
 */

import {
  createElementsByClassName,
  setTextContent,
  bulkAppend,
  addAttributes,
} from "../../modules/basics";

function createContactForm() {
  const [
    container,
    row,
    header,
    header_body,
    heading,
    header_text,
    body,
    form,
    btn_form,
    btn_div,
    btn,
  ] = createElementsByClassName(
    ["section", "contact container p-5"],
    ["div", "row"],
    ["div", "col-md-3 bg-secondary text-light p-4"],
    ["div", "contact-info my-2"],
    ["h2", "my-2"],
    ["h4"],
    ["div", "col-md-9 p-3 bg-light"],
    ["form", "contact-form"],
    ["div", "form-group p-2"],
    ["div", "col-sm-12 col-md-3 ms-auto"],
    ["button", "btn btn-outline-secondary w-100"]
  );

  const inputs = [
    ["First Name", "input", "text", "fname", "Enter First Name"],
    ["Last Name", "input", "text", "lname", "Enter Last Name"],
    ["Email", "input", "email", "email", "Enter Email"],
    ["Comment", "textarea", "textarea", "comment", "Enter Last Name"],
  ];

  inputs.forEach((item) => {
    const [form_group, label, div, input] = createElementsByClassName(
      ["div", "form-group p-2"],
      ["label", "control-label"],
      ["div", "col-sm-10"],
      [item[1], "form-control"]
    );

    label.setAttribute("for", item[3]);
    label.textContent = `${item[0]}:`;
    addAttributes(input, {
      type: item[2],
      id: item[3],
      placeholder: item[4],
    });

    if (item[1] == "textarea") {
      input.removeAttribute("type");
    }

    bulkAppend(form, [form_group, [label], [div], [input]]);
  });

  const img = new Image();
  img.src = "https://image.ibb.co/kUASdV/contact-image.png";

  setTextContent(
    [heading, "Contact Us"],
    [header_text, "We would love to hear from you !"],
    [btn, "Send"]
  );

  bulkAppend(container, [
    row,
    [header, [header_body, [img], [heading], [header_text]]],
    [body, [form, [btn_form, [btn_div, [btn]]]]],
  ]);

  return container;
}

export default createContactForm;
