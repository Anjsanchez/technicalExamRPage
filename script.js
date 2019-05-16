const navSlide1 = {
    burger: document.querySelector('.burger-line'),
    nav: document.querySelector('.nav-links'),
    navLinks: document.querySelectorAll('.nav-links li'),
    toggleButtonFunction: function() {
        this.burger.addEventListener('click', () => {
            this.nav.classList.toggle('nav-active');
            this.burger.classList.toggle('toggle');
                
            this.navLinks.forEach((n,i)=>{
                n.style.animation == '' ?  n.style.animation = `navLinkFade 0.5s ease forwards ${i / 7 + .5}s` : n.style.animation= ''; 
            })

        })
    }, 
};
const images = {
	man: {
		heading: 'Man Image',
		description: 'Image of a man.',
		path: 'img/man.jpg'
	},
	wizard: {
		heading: 'Wizard Image',
		description: 'Image of a wizard.',
		path: 'img/wizard.jpg'
	},
	beast: {
		heading: 'Beast Image',
		description: 'Image of a beast.',
		path: 'img/beast.jpg'
    }
};
const imgObj = {
  frstMessageHeading: document.getElementById("text1Heading"),
  frstMessageDesc: document.getElementById("text1Desc"),
  secondMessageHeading: document.getElementById("text2Heading"),
  secondMessageDesc: document.getElementById("text2Desc"),
  thirdMessageHeading: document.getElementById("text3Heading"),
  thirdMessageDesc: document.getElementById("text3Desc"),
  initiateMessage: function() {
    this.frstMessageHeading.innerText = images.man.heading;
    this.frstMessageDesc.innerText = images.man.description;

    this.secondMessageHeading.innerText = images.wizard.heading;
    this.secondMessageDesc.innerText = images.wizard.description;

    this.thirdMessageHeading.innerText = images.beast.heading;
    this.thirdMessageDesc.innerText = images.beast.description;
  }
};


 
imgObj.initiateMessage();
navSlide1.toggleButtonFunction();


