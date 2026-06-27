// =========================
// LUXARA BEAUTY
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    }else{

        header.style.background = "rgba(255,255,255,.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

    }

});
