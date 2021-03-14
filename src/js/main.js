import setRange from "./setRange";
import searchFieldCheck from "./searchFieldCheck";

window.addEventListener("DOMContentLoaded", () => {
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
