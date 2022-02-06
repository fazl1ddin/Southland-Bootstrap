let all = document.querySelectorAll(".col-sm-6");
let sapiente = document.querySelectorAll(".col-sm-6 h2");
let rerum = document.querySelectorAll(".card");
all.forEach((item, index) => {
    item.addEventListener("mouseover", function(){
        let washington = item.getAttribute("data-home");
        let plastic = document.querySelector("#" + washington);
        let enim = document.querySelector("." + washington);
        // let minus = enim.animate([
        //     {top: 155 + "px"},
        //     {top: 75 + "px"}
        // ], {duration: 500});
        // minus.addEventListener("finish", function(){
            enim.classList.add("top");
        // });
        plastic.classList.add("vid");
        // plastic.animate([
        //     {opacity: 0},
        //     {opacity: 0.8}
        // ], {duration: 500});
    });
    item.addEventListener("mouseout", function(){
        sapiente[index].classList.remove("top");
        // let minus = sapiente[index].animate([
        //     {top: 75 + "px"},
        //     {top: 155 + "px"}
        // ], {duration: 500});
        // let et = rerum[index].animate([
        //     {opacity: 0.8},
        //     {opacity: 0}
        // ], {duration: 500});
        // et.addEventListener("finish", function(){
            rerum[index].classList.remove("vid");
        // });
    });
});
let sliderElements = document.querySelectorAll(".col-sm-4.sl");
console.log(sliderElements);
let start = document.querySelector(".start");
let middle = document.querySelector(".middle");
let end = document.querySelector(".end");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let len = sliderElements.length;
let applic = true;
sliderElements = Array.from(sliderElements);
for(let i = 0; i < sliderElements.length; i++){
    let sta = sliderElements.indexOf(start);
    let mid = sliderElements.indexOf(middle);
    let en = sliderElements.indexOf(end);
    next.addEventListener("click", function(){
        if(applic){
            applic = false;
            const whensta = sta;
            let animatysta = sliderElements[whensta].animate([
                {transform: "translateX(0)"},
                {transform: "translateX(-100%)"}
            ], {duration: 500});
            const whenmid = mid;
            let animatymid = sliderElements[whenmid].animate([
                {transform: "translateX(0)"},
                {transform: "translateX(-100%)"}
            ], {duration: 500});
            const whenen = en;
            let animatyen = sliderElements[whenen].animate([
                {transform: "translateX(0)"},
                {transform: "translateX(-100%)"}
            ], {duration: 500});
            sta++;
            if(sta >= len){
                sta = 0;
            };
            sliderElements[sta].animate([
                {transform: "translateX(0)"},
                {transform: "translateX(-100%)"}
            ], {duration: 500});
            mid++;
            if(mid >= len){
                mid = 0;
            };
            sliderElements[mid].animate([
                {transform: "translateX(0)"},
                {transform: "translateX(-100%)"}
            ], {duration: 500});
            en++;
            if(en >= len){
                en = 0;
            };
            sliderElements[en].animate([
                {transform: "translateX(0)"},
                {transform: "translateX(-100%)"}
            ], {duration: 500});
            animatysta.addEventListener("finish", function(){
                sliderElements[whensta].classList.remove("start");
                sliderElements[whensta].classList.add("order");
                sliderElements[sta].classList.add("start");
                sliderElements[sta].classList.remove("order");
                applic = true;
            });
            animatymid.addEventListener("finish", function(){
                sliderElements[whenmid].classList.remove("middle");
                sliderElements[mid].classList.add("middle");
                applic = true;
            });
            animatyen.addEventListener("finish", function(){
                sliderElements[whenen].classList.remove("end");
                sliderElements[en].classList.add("end");
                sliderElements[en].classList.remove("order");
                applic = true;
            });
        };
    });
    prev.addEventListener("click", function(){
        if(applic){
            applic = false;
            whensta = sta;
            let animatysta = sliderElements[whensta].animate([
                {transform: "translateX(0)"},
                {transform: "translateX(100%)"}
            ], {duration: 500});
            whenmid = mid;
            let animatymid = sliderElements[whenmid].animate([
                {transform: "translateX(0)"},
                {transform: "translateX(100%)"}
            ], {duration: 500});
            whenen = en;
            let animatyen = sliderElements[whenen].animate([
                {transform: "translateX(0)"},
                {transform: "translateX(100%)"}
            ], {duration: 500});
            sta--;
            if(sta < 0){
                sta = len - 1;
            }
            sliderElements[sta].animate([
                {transform: "translateX(0)"},
                {transform: "translateX(100%)"}
            ], {duration: 500});
            mid--;
            if(mid < 0){
                mid = len - 1;
            }
            sliderElements[mid].animate([
                {transform: "translateX(0)"},
                {transform: "translateX(100%)"}
            ], {duration: 500});
            en--;
            if(en < 0){
                en = len - 1;
            }
            sliderElements[en].animate([
                {transform: "translateX(0)"},
                {transform: "translateX(100%)"}
            ], {duration: 500});
            animatysta.addEventListener("finish", function(){
                sliderElements[whensta].classList.remove("start");
                sliderElements[sta].classList.add("start");
                sliderElements[sta].classList.remove("order");
                applic = true;
            });
            animatymid.addEventListener("finish", function(){
                sliderElements[whenmid].classList.remove("middle");
                sliderElements[mid].classList.add("middle");
                applic = true;
            });
            animatyen.addEventListener("finish", function(){
                sliderElements[whenen].classList.remove("end");
                sliderElements[whenen].classList.add("order");
                sliderElements[en].classList.add("end");
                applic = true;
            });
        };
    });
};