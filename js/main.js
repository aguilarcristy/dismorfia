console.log("dismorfia");

// document.querySelector("#image-div").addEventListener("click", function () {
//     document.querySelector("#image-div").style.visibility = "hidden";
// });

// divs.forEach((div) => {
//     div.addEventListener('click', () => {
//         console.log("forEach worked");
//         div.style.visibility = "hidden"; 
//     });
// });

// CHANGING THE COLOR OF THE HEADER
// let header = document.querySelector("#page-title");
// header.addEventListener('click', function () {
//     header.style.color="#000000";
// });
document.addEventListener("DOMContentLoaded", function() {
    let header = document.querySelector("#page-title");
    header.addEventListener('click', function () {
        header.style.color = "#000000";
    });
});


