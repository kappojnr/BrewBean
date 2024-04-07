console.log("Hello world")

const myname ="kappojnr"
const h1 =document.querySelector('.heading-primary')
console.log(h1)
console.log(myname)

///h1.addEventListener('click',function (){
//   h1.textContent=myname;
//   h1.style.backgroundColor ='red';
//   h1.style.padding='5rem';
// });

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector('.year')
const currentYear = new Date().getFullYear();
console.log(currentYear);
// yearEl.textContent=currentYear;

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach( function (link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const href =link.getAttribute ("href");
    
    // scroll back to top
    if (href === "#") window.scrollTo({
      top:0,
      behavior:"smooth"
    });
    // scroll to other links 
  if (href !== "#" && href.startsWith("#")) {
    const sectionEl = document.querySelector(href);
    sectionEl.scrollIntoView ({ behavior:"smooth"})
  }
  // close mobile naviation
  if(link.classList.contains('main-nav-link'))
  headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function() {
  headerEl.classList.toggle("nav-open");
});
///////////////////////////////////////////////////////////
// sticky navigation
const sectionHeroEl = document.querySelector(".section-hero")

const obs = new IntersectionObserver(
  function(entries) {
  const ent = entries[0];
  console.log(ent);

  if(ent.isIntersecting === false)
  document.querySelector(".header").classList.add("sticky");
},
 {
  // in the viewport
  root: null,
  threshold: 0,
});
obs.observe(sectionHeroEl);