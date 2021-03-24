import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";



window.addEventListener('DOMContentLoaded', () => {
    modals('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    modals('.phone_link', '.popup', '.popup .popup_close');
    tabs('.glazing_slider', '.slick-slide', '.glazing_content', '.after_click');
    tabs('.decoration_slider', '.decoration_item', '.decoration_content', '.after_click');
});