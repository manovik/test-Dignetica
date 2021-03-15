import setRange from "./setRange";
import searchFieldCheck from "./searchFieldCheck";
import slider from "./slider";

window.addEventListener("DOMContentLoaded", () => {
  slider(
    ".item__container-wrapper",
    ".item__container",
    ".item__track",
    ".item__wrapper"
  ); // not my slider, just fast solution from habr

  setRange(
    "#rangeMin",
    "#rangeMax",
    "#minInput",
    "#maxInput",
    "#minInputMask",
    "#maxInputMask"
  );

  searchFieldCheck("#searchField", "#searchButton");
});
