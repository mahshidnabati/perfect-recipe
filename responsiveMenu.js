   //Search Icon
   const searchIcon = document.getElementById("search-icon");
   const searchMenu = document.getElementById("search-menu");
   const searchIconSearch = document.getElementById("search-icon-search");
   const searchIconClose = document.getElementById("search-icon-close");


   let menuVisibleSearch = false;

   searchIcon.addEventListener("click", function () {
     if (!menuVisibleSearch) {
       searchMenu.style.display = "block";
       menuVisibleSearch = true;
       searchIconSearch.style.display = "none";
       searchIconClose.style.display = "inline-block";
     } else {
       searchMenu.style.display = "none";
       menuVisibleSearch = false;
       searchIconSearch.style.display = "inline-block";
       searchIconClose.style.display = "none";
     }
   });

   //Contact Icon
   const contactIcon = document.getElementById("contact-icon");
   const contactMenu = document.getElementById("contact-menu");
   const contactIconContact = document.getElementById("contact-icon-contact");
   const contactIconClose = document.getElementById("contact-icon-close");

   let menuVisibleContact = false;

   contactIcon.addEventListener("click", function () {
     if (!menuVisibleContact) {
       contactMenu.style.display = "block";
       menuVisibleContact = true;
       contactIconContact.style.display = "none";
       contactIconClose.style.display = "inline-block";
     } else {
       contactMenu.style.display = "none";
       menuVisibleContact = false;
       contactIconContact.style.display = "inline-block";
       contactIconClose.style.display = "none";
     }
   });

   //******//
   const menuIcon = document.getElementById("menu-icon");
   const menu = document.getElementById("menu");
   const menuIconMenu = document.getElementById("menu-icon-menu");
   const menuIconClose = document.getElementById("menu-icon-close");

   let menuVisible = false;
   let currentSubmenu = null;

   menuIcon.addEventListener("click", function () {
     if (!menuVisible) {
       menu.style.display = "block";
       menuVisible = true;
       menuIconMenu.style.display = "none";
       menuIconClose.style.display = "inline-block";
     } else {
       menu.style.display = "none";
       menuVisible = false;
       menuIconMenu.style.display = "inline-block";
       menuIconClose.style.display = "none";
     }
   });

   // Toggle submenu visibility
   const parentItems = document.querySelectorAll("#menu li");

   parentItems.forEach(function (parentItem) {
     const submenu = parentItem.querySelector("ul");

     parentItem.addEventListener("click", function () {
       if (submenu) {
         if (submenu !== currentSubmenu) {
           closeCurrentSubmenu();
           submenu.style.display = "block";
           currentSubmenu = submenu;
         } else {
           submenu.style.display = "none";
           currentSubmenu = null;
         }
       }
     });
   });

   // Function to close the current open submenu
   function closeCurrentSubmenu() {
     if (currentSubmenu) {
       currentSubmenu.style.display = "none";
       currentSubmenu = null;
     }
   }

   /// change screen size
   const menuChange = document.getElementById('menu');

function handleResize() {
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  if (windowWidth > 690) {
    // menuChange.classList.remove('menu');
    window.location.reload();
  }
}

window.addEventListener('resize', handleResize);