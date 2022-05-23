import { data } from "../../modules/data";
import { $, createElementsByClassName } from "../../modules/basics";
import { createNavbar } from "./navbar";


function loadBody(){

    const container = $('#container');
    
    const navbar    = createNavbar(
        data.brandName,
        ...data.menuItems
        );
    const contentPlaceHolder = createElementsByClassName(['main', 'main container col-xxl-10'])
        
    container.append(navbar, contentPlaceHolder);
}

export { loadBody };