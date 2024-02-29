var productImages = document.getElementById("product_images");
let name1 = document.getElementById("name");
let pPrice1 = document.getElementById("price");  
let pPrice2 = document.getElementById("price2");  
let dcp = document.getElementById("dcp");  
let iCode = document.getElementById("iCode"); 

var mrquee = document.getElementsByClassName("m-text");
    var a;
    navigator.geolocation.getCurrentPosition((e) => {
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${e.coords.latitude}%2C${e.coords.longitude}&key=3b10b5bb58f9468191dadedd17ed1533`)
            .then((data) => {
                return data.json()
            }).then((res) => {
                a = res.results[0].formatted
                // marguee()
                mrquee[0].innerHTML += ` ${a}`
            })
    })

let queryParams = new URLSearchParams(window.location.search);
let paramId = queryParams.get("id"); 

productImages.innerHTML = `
<img src="../specialCake/${specialCake[paramId].img}" alt="">
`;

name1.innerText = specialCake[paramId].name;
pPrice1.innerText = specialCake[paramId].price1+"rs /";
pPrice2.innerText = specialCake[paramId].price2+"rs";
dcp.innerText = specialCake[paramId].dsp;
iCode.innerText = specialCake[paramId].iCode;
