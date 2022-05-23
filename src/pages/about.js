import  { $, activeNavLink } from "./components/navbar";


function loadAbout(){
    const contentPlaceHolder = $('main.main');
    activeNavLink('#link-about');
    contentPlaceHolder.innerHTML = '';
}

export { loadAbout };