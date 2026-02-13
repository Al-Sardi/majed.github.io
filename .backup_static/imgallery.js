
let lBtn = document.getElementById('#leftbtn');
let rBtn = document.getElementById('#rightbtn');

let images = ["src/imgs_for_slide/d1.jpg", "src/imgs_for_slide/d2.jpg", "src/imgs_for_slide/d3.jpg", "src/imgs_for_slide/d4.jpg", "src/imgs_for_slide/d5.jpg", "src/imgs_for_slide/d6.jpg", "src/imgs_for_slide/d7.jpg", "src/imgs_for_slide/d8.jpg", "src/imgs_for_slide/d9.jpg"];

let imgState = 0;

rBtn.addEventListener("click", function (event) {
  imgState = (++imgState % images.length);
  event.target.src = images[imgState];
});
