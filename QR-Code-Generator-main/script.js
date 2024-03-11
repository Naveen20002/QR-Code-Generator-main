let frm=document.querySelector("#frm");
let output=document.querySelector(".output");
let spinner=document.querySelector("#loading");
frm.addEventListener("submit",function(e){
  
  
    e.preventDefault();
let url=document.querySelector("#url");
let size=document.querySelector("#size");
let clrDark=document.querySelector("#colorDark");
let clrLight=document.querySelector("#colorLight");

if(url===""){
    alert("Please Enter Your Website Link");
}else{
spinner.style.display="flex";

setTimeout(function() {
    spinner.style.display="none";
}, 3000);


}

});