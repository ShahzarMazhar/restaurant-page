/*
 * Module: Basic functions
 * Responsibility: Document Object Manipulation
 */

function $_(selector, context) {
    return (context || document).querySelectorAll(selector);
}
function $(selector, context) {
    return (context || document).querySelector(selector);
}

//make easy document.create (including bulk create)
function createElements(...elementName){
    const result = [];
    elementName.forEach(e => result.push(document.createElement(e)));

    if(result.length == 1) return result[0];
    return result;
}

//make easy add Attribute (including bulk)

function addAttribute(qualifiedName, ...pairsOfNodeAttribute){

    pairsOfNodeAttribute.forEach(e => {
        e[0].setAttribute(qualifiedName, e[1]);
    })
}
function addAttributes(element, attributes){
    for(const attribute in attributes){
        element.setAttribute(attribute, attributes[attribute]);
    }
    
}

function createElementsByClassName(...pairsOfElementClasses){
    const result = [];

    pairsOfElementClasses.forEach(e => {
        const el = createElements(e[0]);
        el.className = e[1];

        result.push(el);
    })

    if(result.length == 1) return result[0];
    return result;
}

function bulkAppend(parent, ...children){
    if(!children) return;

        children.forEach(child => {
        parent.appendChild(child[0]);

        if(child[1]){
            const [newParent] = child.splice(0, 1);
            bulkAppend(newParent, ...child);
        }
    })

}

function setTextContent(...pairsOfElementText) {
    pairsOfElementText.forEach(item => {
        item[0].textContent = item[1];
    });
}

function random(max=Number, min=0){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export {$, $_, createElements, addAttribute, addAttributes, createElementsByClassName, bulkAppend, setTextContent, random};