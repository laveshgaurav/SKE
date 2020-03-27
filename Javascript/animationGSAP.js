gsap.from('.box', { width: 0, duration: 2 });
gsap.from('.img-fluid', { opacity: 0, duration: 2, x: -200 });
gsap.from('.para p', {
  y: 400,
  opacity: 0,
  stagger: 0.6
});
