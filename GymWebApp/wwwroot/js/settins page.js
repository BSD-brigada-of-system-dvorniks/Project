//DEFAULT
const rectangleProfile = document.getElementById('rectangle-profile');
const rectanglePlan = document.getElementById('rectangle-plan')
const rectanglePass = document.getElementById('rectangle-password')
const rectanglePayement = document.getElementById('rectangle-payement')
const rectangleBtn = document.getElementById('rectangle-btn')

// rectangleProfile.style.background = '#b1b1b1';
// rectanglePlan.style.background = 'white';
// rectanglePass.style.background = 'white';
// rectanglePayement.style.background = 'white';
// rectangleBtn.style.background = 'white';

//MENU
// const profileBtn = document.querySelector('.profile-btn');
// const passwordBtn = document.querySelector('.password-btn');

// profileBtn.addEventListener('click', function() {
//     rectangleProfile.style.background = '#b1b1b1';
//     rectanglePlan.style.background = 'white';
//     rectanglePass.style.background = 'white';
//     rectanglePayement.style.background = 'white';
//     rectangleBtn.style.background = 'white';        
// } );

// passwordBtn.addEventListener('click', function() {
//     rectangleProfile.style.background = 'white';
//     rectanglePlan.style.background = 'white';
//     rectanglePass.style.background = '#b1b1b1';
//     rectanglePayement.style.background = 'white';
//     rectangleBtn.style.background = 'white';        
// } );

//MENU 2
var path = window.location.pathname;
var page = path.split("/").pop();
console.log( page );

if (page == 'settings%20page.html'){
    rectangleProfile.style.opacity = "100";
    rectanglePlan.style.opacity = "0";
    rectanglePass.style.opacity = "0";
    rectanglePayement.style.opacity = "0";
    rectangleBtn.style.opacity = "0";
} else if (page == 'settings%20password.html'){
    rectangleProfile.style.opacity = "0";
    rectanglePlan.style.opacity = "0";
    rectanglePass.style.opacity = "100";
    rectanglePayement.style.opacity = "0";
    rectangleBtn.style.opacity = "0"; 
} else if (page == 'settings%20plan.html'){
    rectangleProfile.style.opacity = "0";
    rectanglePlan.style.opacity = "100";
    rectanglePass.style.opacity = "0";
    rectanglePayement.style.opacity = "0";
    rectangleBtn.style.opacity = "0"; 
} else if (page == 'settings%20payment.html'){
    rectangleProfile.style.opacity = "0";
    rectanglePlan.style.opacity = "0";
    rectanglePass.style.opacity = "0";
    rectanglePayement.style.opacity = "100";
    rectangleBtn.style.opacity = "0"; 
} else if (page == 'settings%20password%20trainer.html'){
    rectangleProfile.style.opacity = "0";
    rectanglePass.style.opacity = "100";
    rectangleBtn.style.opacity = "0"; 
} else if (page == 'settings%20page%20trainer.html'){
    rectangleProfile.style.opacity = "100";
    rectanglePass.style.opacity = "0";
    rectangleBtn.style.opacity = "0"; 
}

//Photo upload
const img = document.querySelector('#photo');
const file = document.querySelector('#file');

file.addEventListener('change', function(){
    //this refers to file
    const choosedFile = this.files[0];

    if (choosedFile) {

        const reader = new FileReader(); //FileReader is a predefined function of JS

        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);
    }
});