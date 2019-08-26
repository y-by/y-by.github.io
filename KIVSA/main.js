
function classToggle() {
  let img = document.querySelector('.image');
  img.classList.toggle('transform');
  img.classList.toggle('transform-active');
};

document.querySelector('.item2').addEventListener('click', classToggle);
