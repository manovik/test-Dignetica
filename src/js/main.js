window.addEventListener("DOMContentLoaded", () => {
  const rangeMin = document.querySelector("#rangeMin"),
        rangeMax = document.querySelector("#rangeMax"),
        minInput =  document.querySelector("#minInput"),
        maxInput =  document.querySelector("#maxInput");

  let minVal = parseInt(rangeMin.value);
  let maxVal = parseInt(rangeMax.value);

  const minDifference = 3;

  rangeMax.addEventListener('input', () => {
    minVal = parseInt(rangeMin.value);
    maxVal = parseInt(rangeMax.value);

    if (maxVal < minVal + minDifference) {
      rangeMin.value = parseInt(maxVal - minDifference);

      if (minVal === rangeMin.min) {
        rangeMax.value = parseInt(minDifference);
      }
    }
    minInput.value = parseInt(rangeMin.value)
    maxInput.value = parseInt(rangeMax.value)
    
  });

  rangeMin.addEventListener('input', () => {
    minVal = parseInt(rangeMin.value);
    maxVal = parseInt(rangeMax.value);
    console.log("🚀 ~ file: main.js ~ line 31 ~ rangeMin.addEventListener ~ maxVal", typeof maxVal)

    if (minVal > maxVal - minDifference) {
      rangeMax.value = parseInt(minVal + minDifference);

      if (maxVal === rangeMax.max) {
        rangeMin.value = parseInt(rangeMax.max - minDifference);
      }
    }
    minInput.value = parseInt(rangeMin.value);
    maxInput.value = parseInt(rangeMax.value);
  });
});

// cant resolve locale
// toLocaleString & Intl.NumberFormat crush slider
// maybe make mask up on input?