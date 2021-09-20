const iconMenu = document.querySelector('.nav__burger');

if (iconMenu) {
   const menuBody = document.querySelector('.nav__body');
   iconMenu.addEventListener('click', function () {
      document.body.classList.toggle('active');
      iconMenu.classList.toggle('active');
      menuBody.classList.toggle('active');
   })

   menuBody.addEventListener('click', function (ev) {
      if (ev.target.closest('a')) {
         iconMenu.classList.remove('active');
         menuBody.classList.remove('active');
         document.body.classList.remove('active');
      }
   })
}