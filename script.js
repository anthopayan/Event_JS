// exo 1
var cnt=0;
var clickFooter = document.getElementsByTagName("footer");
    clickFooter[0].addEventListener("click",  function fonc() {   
        cnt+=1;
    console.log("clic numéro ",`${cnt}`);
}); 
// exo 2
var hamBtn = document.getElementsByClassName("navbar-toggler");
    hamBtn[0].addEventListener("click",  function func() {   
    document.getElementById("navbarHeader").classList.toggle("collapse");

}); 

// exo 3
var TextRed = document.getElementsByClassName("card-text");
var BtCard = document.getElementsByClassName("btn btn-sm btn-outline-secondary");
BtCard[0].addEventListener("click",  function fonc() {   
TextRed[0].style.color = 'red';
});

// exo 4
BtCard[1].addEventListener("click",  function fonc() {   
 
if (TextRed[1].style.color === 'green'){
    TextRed[1].style.color = 'black' ;
    }else 
    TextRed[1].style.color = 'green' ;
});

// exo 5

var dbNav = document.getElementsByTagName("header");
var reload = document.getElementsByClassName("col-sm-8");
    dbNav[0].addEventListener("dblclick",  function fonc() {   
    document.styleSheets[0].disabled = true|false;
    reload[0].addEventListener("dblclick", function menuToggle() {
    window.location.reload();
    });
}); 

// exo 6
var View = document.getElementsByClassName("btn-success");

for(let l = 0; l < View.length; l++){
View[l].addEventListener("mouseover", function fonct(e){ 
  
  if (document.getElementsByClassName("card-text")[l].classList.toggle("collapse") === false){
    document.getElementsByClassName("card-img-top")[l].style.width = "100%";
    
  } else {
    document.getElementsByClassName("card-img-top")[l].style.width = "20%";
  }
});
}

// exo 7
let btCard = document.getElementsByClassName('btn btn-secondary my-2')[0];
let globalCard = document.getElementsByClassName('row')[1];

btCard.addEventListener('click', function() {
  globalCard.insertBefore(globalCard.lastElementChild, globalCard.firstElementChild)
});
