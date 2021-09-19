// function Person(name, age, address) {
//   this.name = name;
//   this.age = age;
//   this.address = address;
// }
// Person.prototype = {
//   genFullinfo() {
//     return "Name:" + this.name + " " + "age:" + this.age;
//   },

//   geninfo() {
//     return "age:" + this.age + " " + "address:" + this.address;
//   },
// };
// Person.prototype.constructor = Person;

// const fuad = new Person("fuad", 25, "Rangpur");
// console.log(fuad.genFullinfo());
// const rakib = new Person("Rakib", 40, "Dhaka");

// console.log(rakib.genFullinfo());

// class Person {
//   constructor(name, age, address) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }
//   genFullinfo() {
//     return "Name:" + this.name + " " + "age:" + this.age;
//   }

//   geninfo() {
//     return "age:" + this.age + " " + "address:" + this.address;
//   }
// }

// const rakib = new Person("rakib", 28, "Rangpur");

// console.log(rakib.genFullinfo());

// window.addEvent("scroll", function (event) {
//   var x = document.querySelector(".navber");

//   if (window.scrollY > 100) {
//     x.classList.add("navber-scroll");
//   }
// });

// window.addEventListener("scroll", function () {
//   let navber = document.querySelector(".navber");

//   navber.classList.toggle("navber-scroll", window.scrollY > 50);
// });

// let navber = document.querySelector(".navber");

const navbar = document.querySelector(".navber");
this.onscroll = () => {
  if (this.scrollY > 60) {
    navbar.classList.add("navber-scroll");
  } else {
    navbar.classList.remove("navber-scroll");
  }
};
// use plugin call
new WOW().init();
// owlCarousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    rewind: false,
  });
});
// use plugin call
$(".vedio").magnificPopup({
  type: "iframe",
});
