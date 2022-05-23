import  { $, activeNavLink } from "./components/navbar";


function loadContact(){
    const contentPlaceHolder = $('main.main');
    activeNavLink('#link-contact');
    contentPlaceHolder.innerHTML = '';
}


export { loadContact };