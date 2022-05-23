import  {$,  activeNavLink } from "./components/navbar";


function loadMenu(){
    const contentPlaceHolder = $('main.main');
    activeNavLink('#link-menu');
    contentPlaceHolder.innerHTML = '';
}

export { loadMenu };