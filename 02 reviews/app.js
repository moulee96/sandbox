// local reviews data
const reviews = [
  {
    id: 1,
    name: "alister",
    job: "Software engineer",
    img: "/images/alister.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
  },
  {
    id: 2,
    name: "Mohana prasath",
    job: "Engineer",
    img: "/images/kmp.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
  },
  {
    id: 3,
    name: "Mohan kumar",
    job: "Data engineer",
    img: "/images/mohan.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
  },
  {
    id: 4,
    name: "Sampath",
    job: "Dev ops engineer",
    img: "/images/sam.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. "
  },
  {
    id: 5,
    name: "Mouli",
    job: "designer",
    img: "/images/mouli.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. "
  }
];

// Select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// Select buttons
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// Starting item
let currentItem = 0;

// Load item
window.addEventListener("DOMContentLoaded", function () {
  showDetail(currentItem);
});

// Show details
function showDetail(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showDetail(currentItem);
});

// Show previous person

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showDetail(currentItem);
});

// Show random person

randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showDetail(currentItem);
});
