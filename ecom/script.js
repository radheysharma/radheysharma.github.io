let menuitems = document.getElementById("menuitems");
menuitems.style.maxHeight = '0px';
function menutoggle(){
    if(menuitems.style.maxHeight == '0px'){
        menuitems.style.maxHeight = '200px';
    }
    else{
        menuitems.style.maxHeight = '0px';
    }
}
let lf = document.getElementById("loginform");
let rf = document.getElementById("registerform");
let i = document.getElementById("indicator");
function r(){
    rf.style.transform = "translateX(0px)";
    lf.style.transform = "translateX(0px)";
    i.style.transform = "translateX(100px)";
}
function l(){
    rf.style.transform = "translateX(300px)";
    lf.style.transform = "translateX(300px)";
    i.style.transform = "translateX(0px)";
}