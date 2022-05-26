/*
 * Main.js
 */

import "./scss/index.scss";
import "bootstrap";
import { loadBody } from "./pages/components/body";
import { changeTab } from "./modules/tabs-management";
import "./pages/index-pages";



loadBody();
changeTab("page-contact");
