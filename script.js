'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function alertHello() {
    window.alert("hello");
}

const pltsClassNames = [];

function getNames(){
    return myPlantsCollection.map(function(objA) {
    return objA.Name;
    });
}
const getImages = function(){
    return myPlantsCollection.map(function(objA) {
    return objA.MainImage;
    });
}
const getNamesTag = () => {
    const pltsNamesTags = [];
    let i = 0;
    for(const el of getNames()) {
        let className = `name${i}`;
        const newTag = document.createElement("li");
        newTag.innerText = el;
        newTag.setAttribute("id",className);
        pltsClassNames.push(className);
        pltsNamesTags.push(newTag);
        i +=1;
    }
    return pltsNamesTags;
}
const mainContChange = (event) => {
    const pltIndex = event.target.id.slice(-1);
    document.getElementById("mainName").innerText = `種類：${myPlantsCollection[pltIndex].Name}`;
    document.getElementById("typeName").innerText = `属名：${myPlantsCollection[pltIndex].Type}`;
    document.getElementById("habitat").innerText = `原生地：${myPlantsCollection[pltIndex].Habitat}`;
    document.getElementById("buyDate").innerText = `入手時期：${myPlantsCollection[pltIndex].Date}`;
    document.getElementById("introText").innerText = myPlantsCollection[pltIndex].IntroductionText;
    document.getElementById("mainImage").src = myPlantsCollection[pltIndex].MainImage;
}

document.addEventListener("DOMContentLoaded",() => {
    return getNamesTag().forEach((el) => document.getElementById("names").appendChild(el));
    } 
);

document.addEventListener("DOMContentLoaded",() => {
    return pltsClassNames.forEach((el) => {
        return document.getElementById(el).addEventListener("click",mainContChange);
        })
    }
);
