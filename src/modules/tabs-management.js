/*
    This module manages the click event on main menu
*/


import { menuItems } from "./data";


function changeTab(target){
    menuItems.forEach(item => {
        const error = `target is not set for ${item.name}`;
        (item.id == target) ? (item.target) ? item.target() : console.error(error) : "";
    });
}

function tabChangeEvent(event){
    event.preventDefault();
    changeTab(event.target.getAttribute('data-target'));
}

export {changeTab, tabChangeEvent };