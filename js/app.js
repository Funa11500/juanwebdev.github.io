//Variables of Right Background.

var squares1 = document.querySelectorAll('.square');
var bg1 = document.querySelector('#background1');
var title1 = document.querySelector('#move1');
var flag1 = true;

//Variables of Left Background.

var squares2 = document.querySelectorAll('.square2');
var bg2 = document.querySelector('#background2');
var title2 = document.querySelector('#move2');
var flag2 = true;

//Animation of Right Background.

bg1.addEventListener("click", ()=>{

  if (flag1 == true){

  var tl = anime.timeline({
    duration: 2700
  });
  
    tl.add({
      targets: squares1,
      height: "110%",
      easing: 'easeOutQuad',
      delay: anime.stagger(100),
      duration: 450,
      direction: 'alternate',
    })

    setTimeout(function() {
      if (title1.textContent == "Juan"){
        title1.textContent = "About";
        var a = document.createElement('a');
        title1.parentElement.appendChild(a);
        a.appendChild(title1);
        a.href = "/juanwebdev.github.io/projects.html#juanWebDev";
      }
    }, 700);

    tl.add({
      targets: squares1,
      height: "0%",
      easing: 'easeInOutQuad',
      duration: 450,
      delay: anime.stagger(100),
    })

    flag1 = false;
   } 

  })


//Animation of Left Background.

  bg2.addEventListener("click", ()=>{

    if (flag2 == true){

    var tl = anime.timeline({
      duration: 2700
    });
    
      tl.add({
        targets: squares2,
        height: "110%",
        easing: 'easeOutQuad',
        delay: anime.stagger(100),
        duration: 450,
      })
  
  
      setTimeout(function() {
        if (title2.textContent == "Web Developer"){
          title2.textContent = Array(2).fill('\xa0').join('')+"Projects";
          var a = document.createElement('a');
          title2.parentElement.appendChild(a);
          a.appendChild(title2);
          a.href = "/juanwebdev.github.io/projects.html";
        }
      }, 700);
  
      tl.add({
        targets: squares2,
        height: "0%",
        easing: 'easeInOutQuad',
        duration: 450,
        delay: anime.stagger(100),
      })

      flag2 = false;
     }

    })




