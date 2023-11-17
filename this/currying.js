function updateElementText(id){
    return function (content){
        document.getElementById(id).innerHTML=content;
    }
}
let updateHeading=updateElementText("heading");
updateHeading("Hello vaishnav again !");