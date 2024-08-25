

let hours = document.getElementById("hours");
let mins = document.getElementById("mins");
let sec = document.getElementById("sec");


let stop = setInterval(()=>{
    let currentDate = new Date();

    hours.innerHTML = currentDate.getHours();
    mins.innerHTML = currentDate.getMinutes();
    sec.innerHTML = currentDate.getSeconds(); 

})

    // clearInterval(stop);
    




    






