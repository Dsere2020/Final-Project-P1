const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));



fetch('https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
    function appendData(data) {
    var mainContainer = document.getElementById("amexInput");
        mainContainer.value = data[71].boxes;
        resMain = mainContainer.value;
        let createArray = resMain.split(",", resMain.length);
        console.log(createArray);  
        const arrOfNum = createArray.map(str =>{ //Array of Numbers
            return Number(str)
        });
        console.log(arrOfNum);
        const sum = arrOfNum.reduce((acc,val) =>{
            return acc + val;
        }, 0);
        const sumPrint = Math.ceil(sum/10);
        console.log(sumPrint);

        document.getElementById('resultP').innerText = sumPrint;

    }