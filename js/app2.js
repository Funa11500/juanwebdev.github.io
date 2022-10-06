//Animation of projects.html

var barIcon= document.querySelector("#barIcon");
var title1 = document.querySelector('#obj1');
var title2 = document.querySelector('#obj2');

var tl = anime.timeline({
    duration: 20000,
    loop:true,
  });

tl.add({
    targets: barIcon,
    keyframes: [
        {width: '10%'},
        {width: '25%'},
        {width: '15%'},
        {width: '35%'},
        {width: '45%'},
        {width: '60%'},
        {width: '70%'},
        {width: '50%'},
        {width: '75%'},
        {width: '90%'},
        {width: '95%'},
        {width: '100%'},
    ],
    duration: 18000,
    easing: 'easeInOutQuad',
    direction: 'normal',
})

tl.add({
    targets: title2,
    innerHTML: [0, 10],
    round: 1,
    easing: 'easeInOutExpo',
    duration: 1538,
},0)
tl.add({
    targets: title2,
    innerHTML: [10, 25],
    round: 1,
    easing: 'easeInOutExpo',
    duration: 1538,
},1538)
tl.add({
    targets: title2,
    innerHTML: [25, 15],
    round: 1,
    easing: 'easeInOutExpo',
    duration: 1538,
},3076)
tl.add({
    targets: title2,
    innerHTML: [15, 35],
    round: 1,
    easing: 'easeInOutExpo',
    duration: 1538,
},4614)
tl.add({
    targets: title2,
    innerHTML: [35, 45],
    round: 1,
    easing: 'easeInOutExpo',
    duration: 1538,
},6152)
tl.add({
    targets: title2,
    innerHTML: [45, 60],
    round: 1,
    easing: 'easeInOutExpo',
    duration: 1538,
},7690)
tl.add({
    targets: title2,
    innerHTML: [60, 70],
    round: 1,
    easing: 'easeInOutExpo',
    duration: 1538,
},9228)
tl.add({
    targets: title2,
    innerHTML: [70, 50],
    round: 1,
    easing: 'easeInOutExpo',
    duration: 1538,
},10766)
tl.add({
    targets: title2,
    innerHTML: [50, 75],
    round: 1,
    easing: 'easeInOutExpo',
    duration: 1538,
},12304)
tl.add({
    targets: title2,
    innerHTML: [75, 90],
    round: 1,
    easing: 'easeInOutExpo',
    duration: 1538,
},13842)
tl.add({
    targets: title2,
    innerHTML: [90, 95],
    round: 1,
    easing: 'easeInOutExpo',
    duration: 1538,
},15380)
tl.add({
    targets: title2,
    innerHTML: [95, 100],
    round: 1,
    easing: 'easeInOutExpo',
    duration: 1538,
},17200)

function changeTitle(){
    setTimeout(function() {
        title1.textContent = "Finding Tools.."
      }, 3000);

      setTimeout(function() {
        title1.textContent = "Brainstorming.."
      }, 6000);

      setTimeout(function() {
        title1.textContent = "Creating.."
      }, 9000);

      setTimeout(function() {
        title1.textContent = "Polishing.."
      }, 12000);

      setTimeout(function() {
        title1.textContent = "Last Details.."
      }, 14000);

      setTimeout(function() {
        title1.textContent = "Done!"
      }, 16000);
      
      setTimeout(function() {
        title1.textContent = "Thank you for Visiting my Website!"
      }, 17500);

      setTimeout(function() {
        title1.textContent = "Creating Content!"
        changeTitle();
      }, 19000);    
}

changeTitle();









