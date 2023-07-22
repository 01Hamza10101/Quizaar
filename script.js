function toggleMenu() {
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarLinks = document.querySelector('.navbar-links');

  navbarToggle.classList.toggle('active');
  navbarLinks.classList.toggle('active');
}

window.addEventListener('click', function(event) {
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarLinks = document.querySelector('.navbar-links');

  if (!navbarToggle.contains(event.target) && !navbarLinks.contains(event.target)) {
    navbarToggle.classList.remove('active');
    navbarLinks.classList.remove('active');
  }
});

function C10th(){
  window.location.href = "/Sub10.html";
}
function C12th(){
  alert("Sorry, Currently not available!")
}


