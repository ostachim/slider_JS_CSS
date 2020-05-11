let activeElement = 0;
const timeChange = 4000;
const colorImgHtml = document.querySelector(".color");
const grayImgHtml = document.querySelector(".gray");
const h1Html = document.querySelector(".member h1");
const h2Html = document.querySelector(".member h2");


const colorImages = ['img/s2.png','img/s3.png','img/s1.png'];
const grayImages = ['img/s2a.png','img/s3a.png','img/s1a.png'];
const names = ['Marek Feliksiak','Arek Makłowicz','Anna Baugart'];
const professions = ['UX/UI Designer','Front-End Developer','Programistka JS'];

function changeElement(){
    if(activeElement >= colorImages.length){
        activeElement = 0;
    }    
    colorImgHtml.src = colorImages[activeElement];
    grayImgHtml.src = grayImages[activeElement];
    h1Html.textContent = names[activeElement];
    h2Html.textContent = professions[activeElement];
    activeElement++;
    
}

setInterval(changeElement,timeChange);

