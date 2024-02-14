// console.log("Outside Javascript");
// console.log(document);
// console.log(document.body);

const sections= document.querySelectorAll('section'); //All sections in html document are get by using querySelectorAll
// console.log(sections);

for(const section of sections)
{
    section.style.backgroundColor= 'lightgray';
    section.style.border= '3px solid purple';
    section.style.margin= '5px';
    section.style.borderRadius= '20px';
    section.style.paddingLeft= '10px';

}

// Nodelist, Childnode

const placesContainer= document.getElementById('place-container');
// console.log(placesContainer);


//finding parentNode

const parentNode= document.getElementById('place-container')
// console.log(parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);