let l =  document.querySelector(".light");

let signed = document.querySelectorAll("#sign-petition");

let validSignatures = document.querySelector(".signatures")
let revealableContainers = document.querySelectorAll(".revealable")
let themeButton = document.getElementById("theme-button");




const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
  document.body.style.transition = "1s";
}
themeButton.addEventListener("click", toggleDarkMode);

let animation = {
    revealDistance :150,
    initialOpacity : 0,
    transitionDelay: 0,
    transitionDuration : '2s',
    transitionProperty :'all',
    transitionTimingFunction: 'ease'
     
}
window.addEventListener("scroll",scroll, false)

function scroll(){

    for(let i = 0; i < revealableContainers.length; i++ ){
        let windowHeight = window.innerHeight;
        let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
          if( topOfRevealableContainer < windowHeight - animation.revealDistance){
            revealableContainers[i].classList.add("active");
            revealableContainers[i].style.opacity = "1";
            revealableContainers[i].style.transition = "1s";
            revealableContainers[i].style.transform = "translateY(-30px)";
          } else {

            revealableContainers[i].classList.remove("active");
            revealableContainers[i].style.opacity = "";
            revealableContainers[i].style.transition = "";
            revealableContainers[i].style.transform = "";
            
          }

    }

      
    console.log("scrolled")
}














 
function validateForm (event) {

    let containsErrors = false;
  
    let petitionInputs = document.getElementById("sign-petition").elements;
    
    for (let i = 0; i < petitionInputs.length; i++) {
      console.log(petitionInputs[i].value);
      if (petitionInputs[i].value.length < 2) {

        petitionInputs[i].classList.add('error');
        containsErrors = true;
        

      }else {
        petitionInputs[i].classList.remove('error');

      } 
    }
      
      if(containsErrors === false){
        let person = {name: petitionInputs[1].value,}
        addSignature(person);
        toggleModal();
        for(let i = 0; i < petitionInputs.length; i++){
        petitionInputs[i].value = "";
        containsErrors = false;
        

    }
  }
     
    

   
    event.preventDefault(); 
}

const addSignature = (names) =>{ 

  let email = document.querySelector("#hometown").value;
  let password = document.querySelector("#password").value;
  let count = 0;
  console.log(email);
  let new1 = document.createElement("p");  
  let br = document.createElement("br"); 
  new1.style.color = "white"; 
  new1.style.width = "10rem";
  new1.style.borderRadius = "15px";
  new1.textContent = `${names.name} from ${email} is a new pv supporter`;
  validSignatures.appendChild(new1);
  validSignatures.appendChild(br);
}





let image = document.querySelector("#modal-image")
let scaleFactor = 1;
let modalImage = document.querySelector("#modal-image");
function toggleModal(){
        let fname = document.querySelector("#name").value;
        let modal = document.querySelector("#thanks-modal");
        let modalContent = document.querySelector("#thanks-modal-content");
        let intervalId = setInterval(scaleImage,1000); 
        modal.style.display = "flex";
        modalContent.textContent = `Thank you ${fname} for supporting pv!`;


        setTimeout(()=>{
          let modal = document.querySelector("#thanks-modal");
          modal.style.display="none";
          clearInterval(intervalId);
        }, 4000);

      



}


function scaleImage(){
  if(scaleFactor === 1){
      scaleFactor = 0.8;
      modalImage.style.transform = `scale(${scaleFactor})`;
  }else{
      scaleFactor = 1; 
      modalImage.style.transform = `scale(${scaleFactor})`;
  }
};


