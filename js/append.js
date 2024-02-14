//How to create an html document and add it inside another document

// 1. Where to Add
const fruitsList= document.getElementById('fruits-list');
// console.log(fruitsList);

//What we Added

const listItem= document.createElement('li'); //a list item will be added
listItem.innerText= 'JackFruit'; //text of list item

fruitsList.appendChild(listItem);

// Add a section inside main tag like other section

// 1. where we added

const mainContainer= document.getElementById('main-container');
// console.log(mainContainer);

//2. What I adde?---a section
const section= document.createElement('section');
// inside section tag
//2.1 add an h1 element inside section
const h1= document.createElement('h1');
h1.innerText= 'My Favourite Books List';
// append h1 in section tag

section.appendChild(h1);

// 2.2 ul tag added
const ul= document.createElement('ul');

//li number one
const li1= document.createElement('li');
li1.innerText= 'Your Dedication';
ul.appendChild(li1);

//li number two
const li2= document.createElement('li');
li2.innerText= 'A Dreamer Person';
ul.appendChild(li2);

//li number three

const li3= document.createElement('li');
li3.innerText= 'What you produce, other will consume';
ul.appendChild(li3);

//li number four
const li4= document.createElement('li');
li4.innerText= 'Think!';
ul.appendChild(li4);

//append ul in section tag

section.appendChild(ul);

mainContainer.appendChild(section);


// directly added a section in main tag

const penSection= document.createElement('section');

penSection.innerHTML=`

<h1>My Favourite Pens</h1>

<ul>
    <li>All Time</li>
    <li>Matador Pin Point</li>
    <li>Matador High School</li>
</ul>

`
mainContainer.appendChild(penSection);