import  {$, activeNavLink } from "./components/navbar";
import { createWelcome } from "./components/hero";
import { data } from "../modules/data";

function createHome(){
    const welcome = createWelcome(data.brandName, data.welcome);
    return welcome;
}

function loadHome(){
    const contentPlaceHolder = $('main.main');
    activeNavLink('#link-home');

    contentPlaceHolder.innerHTML = '';
    contentPlaceHolder.appendChild(createHome());
}

export { loadHome };