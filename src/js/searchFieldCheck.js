export default function searchFieldCheck(fieldSelector, resetBtnSelector) {
  const search = document.querySelector(fieldSelector),
    searchBtn = document.querySelector(resetBtnSelector);
  let initialSearchBtnPosition = 12,
    searchBtnCoefficient = 1.4;

  search.addEventListener("input", () => {
    let init = 0;
    if (search.value.length) {
      if (search.value.match(/[шщфыжмюijftl]/gi)) {
        try{
          init = search.value.match(/[шщфыжмю0]/gi).length * 1.442;
        } catch (e) {}
        init += search.value.match(/[ijftl]/g).length * .3;
      }
      searchBtn.style.display = "block";
      searchBtn.style.left =
        initialSearchBtnPosition +
        search.value.length * searchBtnCoefficient +
        init +
        "ch";
    } else {
      searchBtn.style.display = "none";
      searchBtn.style.left = 0;
    }
  });

  searchBtn.addEventListener("click", () => {
    searchBtn.style.display = "none";
    searchBtn.style.left = 0;
  });
}