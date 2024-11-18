window.addEventListener("load", ()=> {
    graph1()
})
let graph1=()=> {
    const arr1 = [
        10,
        20,
        30,
        40,
        50,
        60,
        70,
        80,
        90,
        100
    ];
    let random1 = arr1[(Math.floor(Math.random() * (arr1.length)))];
    let random2 = arr1[(Math.floor(Math.random() * (arr1.length)))];
    let random3 = arr1[(Math.floor(Math.random() * (arr1.length)))];
    let graph1 = document.querySelector(".g1");
    let graph2 = document.querySelector(".g2");
    let graph3 = document.querySelector(".g3");
    graph1.style.height = random1+"%";
    graph2.style.height = random2+"%";
    graph3.style.height = random3+"%";
}
let delay = "10000"
setInterval(function() {
    graph1()
}, delay)

// let refbtn = document.getElementById("refresh");

// refbtn.addEventListener("click", ()=> {
//     graph1();
// })