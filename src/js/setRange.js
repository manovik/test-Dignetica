export default function setRange(
  minRangeHandlerSelector,
  maxRangeHandlerSelector,
  minInputSelector,
  maxInputSelector,
  minMaskSelector,
  maxMaskSelector
) {
  const rangeMin = document.querySelector(minRangeHandlerSelector),
        rangeMax = document.querySelector(maxRangeHandlerSelector),
        minInput = document.querySelector(minInputSelector),
        maxInput = document.querySelector(maxInputSelector),
        minMask = document.querySelector(minMaskSelector),
        maxMask = document.querySelector(maxMaskSelector);

  const minDifference = 50000;

  let minVal = parseInt(rangeMin.value);
  let maxVal = parseInt(rangeMax.value);

  minInput.value = minVal;
  minInput.value = minVal;
  minMask.textContent = minVal.toLocaleString("ru-RU");
  maxMask.textContent = maxVal.toLocaleString("ru-RU");

  rangeMax.addEventListener("input", () => {
    minVal = parseInt(rangeMin.value);
    maxVal = parseInt(rangeMax.value);

    if (maxVal < minVal + minDifference) {
      rangeMin.value = parseInt(maxVal - minDifference);
      minMask.textContent = (+rangeMin.value).toLocaleString("ru-RU");

      if (minVal === rangeMin.min) {
        rangeMax.value = parseInt(minDifference);
        maxMask.textContent = (+rangeMax.value).toLocaleString("ru-RU");
      }
    }
    minInput.value = parseInt(rangeMin.value);
    maxInput.value = parseInt(rangeMax.value);
    minMask.textContent = (+rangeMin.value).toLocaleString("ru-RU");
    maxMask.textContent = (+rangeMax.value).toLocaleString("ru-RU");
  });

  rangeMin.addEventListener("input", () => {
    minVal = parseInt(rangeMin.value);
    maxVal = parseInt(rangeMax.value);

    if (minVal > maxVal - minDifference) {
      rangeMax.value = parseInt(minVal + minDifference);
      maxMask.textContent = (+rangeMax.value).toLocaleString("ru-RU");

      if (maxVal === rangeMax.max) {
        rangeMin.value = parseInt(rangeMax.max - minDifference);
        minMask.textContent = (+rangeMin.value).toLocaleString("ru-RU");
      }
    }
    minInput.value = parseInt(rangeMin.value);
    maxInput.value = parseInt(rangeMax.value);
    minMask.textContent = (+rangeMin.value).toLocaleString("ru-RU");
    maxMask.textContent = (+rangeMax.value).toLocaleString("ru-RU");
  });
}