const ship = document.querySelector(".ship");
const body = document.querySelector("body");

window.addEventListener("scroll", function () {
  let userYposition = window.pageYOffset;
  console.log(userYposition);

  ship.style.transition = "transform ease";
  ship.style.transform = `translateX(${userYposition}px)`;
});
