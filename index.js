// click to toggle button and appear menu //

const toggleBtn= document.querySelector('.toggle-btn');
const menu = document.querySelector('.menu')
const backMenu = document.querySelector('.back-menu');

if(toggleBtn){
    toggleBtn.addEventListener('click', function(){
    menu.classList.toggle('show')
    })
}
 
if(backMenu){
    backMenu.addEventListener('click', function(){
        menu.classList.remove('show')
    })
}


// Dropdown Logic //

const Dropdown = document.getElementById('Dropdown');
const DropdownList = document.querySelector('.dropdown')
Dropdown.addEventListener('click', function(){
    DropdownList.classList.toggle('active')
})


// Question section collapse //

const questionInfo= document.querySelectorAll('.question-info')
const allPara = document.querySelectorAll('.question-info #qus-para')

questionInfo.forEach(function(question){
    const Qustion= question.querySelector('#Qustion')
    const qusPara= question.querySelector('#qus-para')
    question.addEventListener('click', function(e){
       
       if(Qustion === e.target){

        const isclassadded = qusPara.classList.contains('show')
        allPara.forEach(function(a){
            a.classList.remove('show')
        })
        qusPara.classList.toggle('show', !isclassadded)
       }
    })
})



// another questions section collapse //

const frequentQus = document.querySelectorAll('.frequent-qus');
const frePara = document.querySelectorAll('.frequent-qus .fre-answer')

frequentQus.forEach(function(question){

    const freQuestion = question.querySelector('#fre-Qustion')
        const frequentPara = question.querySelector('.fre-answer')
      
        question.addEventListener('click', function(e){
     if(freQuestion === e.target){

        const isClassAdded = frequentPara.classList.contains('show')

            frePara.forEach(function(a){
                a.classList.remove('show')
            })
            frequentPara.classList.toggle('show', !isClassAdded) 
        }
    })
})



// Click on Button and back to top //
const toTopBtn = document.querySelector('.to-top-icon');

window.addEventListener('scroll', function(){
    toTopBtn.classList.toggle('animate', window.scrollY > 400)
})

toTopBtn.addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: "smooth"})
})


// Linking home with banner section //

document.addEventListener('scroll', function(){
   
    const homeSection = document.getElementById('banner');
    const homeLink = document.getElementById('home');

    const homesectionTop = homeSection.getBoundingClientRect().top;
const homesectionBottom = homeSection.getBoundingClientRect().bottom;

    if(homesectionTop <= window.innerHeight / 2 && homesectionBottom >= 0 ){

        homeLink.classList.add('active');
    } else{

        homeLink.classList.remove('active');

    }
});



// Linking About-us with about-us section //

document.addEventListener('scroll', function(){
   
    const aboutusSection = document.getElementById('aboutus-container');
    const aboutusLink = document.getElementById('aboutus');

    const sectionTop = aboutusSection.getBoundingClientRect().top;
const sectionBottom = aboutusSection.getBoundingClientRect().bottom;

    if(sectionTop <= window.innerHeight / 2 && sectionBottom >= 0 ){

    aboutusLink.classList.add('active');
    } else{

     aboutusLink.classList.remove('active');

    }
});




// Linking Service with service-section //

document.addEventListener('scroll', function(){
   
    const serviceSection = document.getElementById('service-content');
    const serviceLink = document.getElementById('Services');

    const servicesectionTop = serviceSection.getBoundingClientRect().top;
const servicesectionBottom = serviceSection.getBoundingClientRect().bottom;

    if(servicesectionTop <= window.innerHeight / 2 && servicesectionBottom >= 0 ){

        serviceLink.classList.add('active');
    } else{

        serviceLink.classList.remove('active');

    }
});



// Linking Team with team section //

document.addEventListener('scroll', function(){
   
    const TeamSection = document.getElementById('team-content');
    const TeamLink = document.getElementById('Team');

    const TeamsectionTop = TeamSection.getBoundingClientRect().top;
const TeamsectionBottom = TeamSection.getBoundingClientRect().bottom;

    if(TeamsectionTop <= window.innerHeight / 2 && TeamsectionBottom >= 0 ){

        TeamLink.classList.add('active');
    } else{

        TeamLink.classList.remove('active');

    }
});




// Linking Price with price section //

document.addEventListener('scroll', function(){
   
    const PricingSection = document.getElementById('pricing');
    const PricingLink = document.getElementById('Pricing-tag');

    const PricingsectionTop = PricingSection.getBoundingClientRect().top;
const PricingsectionBottom = PricingSection.getBoundingClientRect().bottom;

    if(PricingsectionTop <= window.innerHeight / 2 && PricingsectionBottom >= 0 ){

        PricingLink.classList.add('active');
    } else{

        PricingLink.classList.remove('active');

    }
});



// Linking Contact with contact section //

document.addEventListener('scroll', function(){
   
    const ContactSection = document.getElementById('address-content');
    const ContactLink = document.getElementById('Contact');

    const ContactsectionTop = ContactSection.getBoundingClientRect().top;
const ContactsectionBottom = ContactSection.getBoundingClientRect().bottom;

    if(ContactsectionTop <= window.innerHeight / 2 && ContactsectionBottom >= 0 ){

        ContactLink.classList.add('active');
    } else{

        ContactLink.classList.remove('active');

    }
});



// Linking portfolio with portfolio section //

document.addEventListener('scroll', function(){
   
    const PortfolioSection = document.getElementById('portfolio-content');
    const PortfolioLink = document.getElementById('Portfolio');

    const PortfoliosectionTop = PortfolioSection.getBoundingClientRect().top;
const PortfoliosectionBottom = PortfolioSection.getBoundingClientRect().bottom;

    if(PortfoliosectionTop <= window.innerHeight / 2 && PortfoliosectionBottom >= 0 ){

        PortfolioLink.classList.add('active');
    } else{

        PortfolioLink.classList.remove('active');

    }
});



// //------- Testimonal Slider -------- //

const testimonalSlider = document.querySelectorAll('.testimonal-container >.testimonal-slider');
const testimonalDots = document.querySelector('.testimonal-dots');

let activeIndex = 0;
let autoPlayInterval;

// createNavigationDots();
// startAutoPlay();


// // Initialize the slider by positioning each slide item and creating navigation dots

testimonalSlider.forEach(function(sliderItem, index)  {
    sliderItem.style.left = `${100* index}%`;   
})

// Create navigation dots based on the number of slider items
function createNavigationDots(){
    testimonalSlider.forEach(function(_, index) {
    const dot = document.createElement('div');
    dot.classList.add('dots');
    // div.textContent = index;
    dot.classList.toggle('active', index === 0);
    testimonalDots.appendChild(dot);

    addClickEventToDot(dot, index);
    });
}
createNavigationDots();

// // Add click event to each dot for manual slide navigation and reset autoplay timer
function addClickEventToDot(dot, index){
    dot.addEventListener('click', function() {
        activeIndex = index;
        updateSliderPosition();
        updateActiveDot();
        resetAutoPlay();
    });
}


// // Update the slider position based on the active index
function updateSliderPosition(){
    testimonalSlider.forEach(function(sliderItem)  {
    sliderItem.style.transform = `translateX(-${100* activeIndex}%)`
    }) ;
}
updateSliderPosition();

// // Update the active dot to reflect the current slide
function updateActiveDot(){
    const dots = document.getElementsByClassName('dots');
    Array.from(dots).forEach(function(dot, index) {
        dot.classList.toggle('active', index === activeIndex);
    });
}


// // Start automatic slide play
function startAutoPlay(){
    autoPlayInterval = setInterval( function(){
        activeIndex = (activeIndex + 1) % testimonalSlider.length;

        updateSliderPosition();
        updateActiveDot();

    }, 4000);
}
startAutoPlay();

// // Clear and restart autoplay timer
function resetAutoPlay(){
    clearInterval(autoPlayInterval);
    startAutoPlay();
}


// // Initialize the slider on page load
initializeSlider();


// portfolio logic //

const portClick = document.querySelectorAll('.portfolio-topic');
const portfolioimg = document.querySelectora('.portfolio img')

portClick.forEach(function(card){
    card.addEventListener('click', function(){
        const dataSrc = card.dataset.src;
    portfolioimg.src = dataSrc;

    if(portfolioimg.src = dataSrc){
        
    }
    })
})


// Question one //

// const Question= document.getElementById('Qustion');
// const  qusPara= document.getElementById('qus-para');


// if(Question){
//     Question.addEventListener('click', function(){
//         qusPara.classList.toggle('show')
//     })
// }

// Question two //

// const QuestionTwo= document.getElementById('Qustion-two');
// const  qusParaTwo= document.getElementById('qus-para-two');

// if(QuestionTwo){
//     QuestionTwo.addEventListener('click', function(){
//         qusParaTwo.classList.toggle('show')
//     })
// }

// // Question three //

// const QuestionThree= document.getElementById('Qustion-three');
// const  qusParaThree= document.getElementById('qus-para-three');

// if(QuestionThree){
//     QuestionThree.addEventListener('click', function(){
//         qusParaThree.classList.toggle('show')
//     })
// }

// Question.forEach(function(question){
//     question.addEventListener('click', function(){
// const Question= document.querySelectorAll('#Question');
//         qusPara = Question;
//     })
// })

// if(question){
//     question.addEventListener('click', function(){

//     })
// }

//   Question.forEach(function(question){
//       question.addEventListener('click', function(){
//           qusPara.classList.toggle('show')
          
        
//       })
//    })


