const containerSlot = document.querySelector('.container-slot');
const btnConfettis = document.querySelector('.btn-confettis');
const emojis = ["🍉", "🍅", "🍓", "🍒", "🍇" ];

btnConfettis.addEventListener("click", fiesta)


function fiesta() {

   if(isTweening()) return;

   for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)];
      containerSlot.append(confetti);
   }
   animateConfettis();
}


function animateConfettis() {
   const timeline = gsap.timeline()

   timeline
   .to('.container-slot div', {
      y : "random(-100, 100)",
      x : "random(-100, 100)",
      z : "random(0, 1000)",
      rotation : "random(-90, 90)",
      duration: 1.5,
   })
     .to('.container-slot div', {
        autoAlpha: 0,
         duration: 1
      }, '-=0.2')
     .add(() => containerSlot.innerHTML = "" );
}


function isTweening() {
   return gsap.isTweening('.container-slot div');
}