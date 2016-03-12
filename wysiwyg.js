var oldDeadPeople = [{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "img/img1.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},
{
  title: "Human Trapper",
  name: "Tomoey Gazen",
  bio: "Serving under Minamoto Yoshinaka, Tomoey was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "img/img2.jpg",
  lifespan: {
    birth: 1747,
    death: 1796
  }
},
{
  title: "Bird Finder",
  name: "Tomo Gohen",
  bio: "Serving under Minamoto Yoshinaka, Tomo was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "img/img3.jpg",
  lifespan: {
    birth: 1747,
    death: 1795
  }
},
{
  title: "Dog Feeder",
  name: "Tamoe Goben",
  bio: "Serving under Minamoto Yoshinaka, Tamoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "img/img4.jpg",
  lifespan: {
    birth: 1747,
    death: 1794
  }
},
{
  title: "Garbage Man",
  name: "Tohoe Guzen",
  bio: "Serving under Minamoto Yoshinaka, Tohoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "img/img5.jpg",
  lifespan: {
    birth: 1747,
    death: 1793
  }
},
{
  title: "Muppet",
  name: "Moeto Zengo",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "img/img6.jpg",
  lifespan: {
    birth: 1747,
    death: 1792
  }
}
];

//variables for errrything

var personContainer = document.getElementById("personContainer");
var personElement = document.getElementById("person");
var inputGrabber = document.getElementById("wordsForPeople");
var bio = document.getElementById("bio");
var dotCheck = personContainer.getElementsByTagName("div")
var wordValue;
var personBuilder;

//constructs a div element for each object in an array

function personMaker(obj) {
  obj.forEach(function(i) {
    personBuilder = "<div id='person' +  class='person'>" + "<person>";
    personBuilder += "<header>" + "<h2>" + i.name + "</h2>" + "<h4>" + i.title + "</h4>" + "</header>";
    personBuilder += "<section>" + "<img src=" + '"' + i.image + '"' + ">"
    personBuilder += "<p id=" + '"' + "bio" + '"' + "class=" + '"' + "bio" + '"' + ">" + i.bio + "</p>" + "</section>";
    personBuilder += "<footer>" + "<h5>" + "Lived: " + i.lifespan.birth + " - " + i.lifespan.death + "</h5>" + "</footer>";
    personBuilder += "</person" + "</div>"
    personContainer.innerHTML += personBuilder;
  });
};


// passes a specific array into the personMaker function

personMaker(oldDeadPeople);


// stores user input

inputGrabber.addEventListener("keyup", function() {
  wordValue = inputGrabber.value;
});

// Makes border around selected div with id of person and focuses text box when clicked

personContainer.addEventListener("click", function(event) {
  if (event.target.closest('div').id === "person"){
    target = event.target;
    target.closest('div').classList.toggle("dotted");
  };
});

//Focuses input when person is clicked.

personContainer.addEventListener("click", function(event) {
  inputGrabber.focus();
  inputGrabber.value = event.target.innerHTML;
})


//Clears input when enter is pressed.

inputGrabber.addEventListener("keydown", function(event) {
   if(event.keyCode == 13) {
    inputGrabber.value = "";
  };
});


// If person has dotted border, bio will match what is typed in the input field. Must toggle off before
// switching to a new "person".

inputGrabber.addEventListener("keyup", function(event) {
  for(var i=0; i < personContainer.children.length; i++){
    var newBio = personContainer.getElementsByTagName("p")[i];
      if (dotCheck[i].classList.contains("dotted")) {
        newBio.innerHTML = inputGrabber.value;
      };
  };
});


// Create an array of objects that represents famous people (see structure below). --DONE
// Create a text input in your DOM. --DONE
// Beneath that, create a container, block element in your DOM. --DONE
// Create a DOM element for each of the objects inside the container. Style your person elements however you like. --DONE
// For every even numbered element, have a light yellow background. --DONE
// For every odd numbered element, have a light blue background. --DONE
// Each element's DOM structure should be as shown below. --DONE
// When you click on one of the person elements, a dotted border should appear around it. --DONE
// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing. --DONE
// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank. -- DONE
