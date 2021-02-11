// external js: isotope.pkgd.js, packery-mode.pkgd.js

let grid = document.querySelector('.grid');
let isotope = new Isotope( grid, {
  itemSelector: '.grid-item',
  percentPosition: true,
  packery: {
    gutter: '.gutter-sizer'
  }
});
