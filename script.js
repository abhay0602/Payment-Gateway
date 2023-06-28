"use strict";


let form=document.querySelector("form")
let x=document.querySelector("#card-number")

x.addEventListener("input",function(){

    if(/^4\d{15}/.test(this.value)){
        this.nextElementSibling.textContent="visa";
    }
    else if(/^5\d{15}/.test(this.value)){
        this.nextElementSibling.textContent="master card";
    }
    else if(/^3\d{15}/.test(this.value)){
        this.nextElementSibling.textContent="american";
    }
    else if(/^6\d{15}/.test(this.value)){
        this.nextElementSibling.textContent="rupey";
    }
})

     let y = document.querySelector("#cv-code");
     y.addEventListener("input", function () {
     if (/^\d{3}$/.test(this.value)) {
        y.nextElementSibling.textContent = "valid cvv";
    }
    else {
        y.nextElementSibling.textContent = "not a valid cvv";
        y.nextElementSibling.style.color = "red";
    }

})

    let z = document.querySelector("#exp-date");
        z.addEventListener("input", function () {
            if (/^(0[1-9]|1[0-2])\/20\d{2}|[3-9]\d$/.test(this.value)) {
                z.nextElementSibling.textContent = "valid Expiration Date";
            }
            else {
                z.nextElementSibling.textContent = "not a valid Expiration Date";
                z.nextElementSibling.style.color = "red";
            }
        })


        let oname = document.querySelector("#name-text");
         oname.addEventListener("input", function () {
            if (/[a-zA-z]{3}/.test(this.value)) {
                oname.nextElementSibling.textContent = "valid name";
            }
            else {
                oname.nextElementSibling.textContent = "not a valid name";
                oname.nextElementSibling.style.color = "red";
            }
        }) 
