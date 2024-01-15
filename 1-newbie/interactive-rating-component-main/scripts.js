const form = document.querySelector(".rating-form");
const submitBtn = document.querySelector(".submit-btn");
const reviewCont = document.querySelector(".review-container");
const submitCont = document.querySelector(".submit-container");
const ratings = document.querySelectorAll("li");
const selectedRating = document.querySelector(".selected-rating");

ratings.forEach((item) => {
  item.addEventListener("click", () => {
    ratings.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let checkedRating = document.querySelector('input[name="rating"]:checked');
  reviewCont.style.display = "none";
  submitCont.style.display = "flex";
  selectedRating.innerHTML = checkedRating.value;
});
