var op1 = document.getElementById("op-1");
var op2 = document.getElementById("op-2");
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

    var cards = document.getElementById("m-cards");
    cards.innerHTML = ``
    for(var i = 0;i<cakeAndDeserts.length;i++){

        cards.innerHTML += `<div class="s-card">
        <div class="sc-img"><img src="./cake&deserts/${cakeAndDeserts[i].img}" alt=""></div><br>
        <div class="s-card-content">
            <h1 class="c-name">${cakeAndDeserts[i].name}</h1>
            <h1 class="c-price">${cakeAndDeserts[i].price1}rs-${cakeAndDeserts[i].price2}rs</h1><br>
            <a href="./pages/eachproduct.html?id=${i}" class="btn">details</a>
        </div>
    </div>`
    }

    op1.addEventListener("click",()=>{

            cards.innerHTML = ``
        
        for(var i = 0;i<cakeAndDeserts.length;i++){
            cards.innerHTML += `<div class="s-card">
            <div class="sc-img"><img src="./cake&deserts/${cakeAndDeserts[i].img}" alt=""></div><br>
            <div class="s-card-content">
            <h1 class="c-name">${cakeAndDeserts[i].name}</h1>
            <h1 class="c-price">${cakeAndDeserts[i].price1}rs-${cakeAndDeserts[i].price2}rs</h1><br>
            <a href="./pages/eachproduct.html?id=${i}" class="btn">details</a>
            </div>

        </div>`
        }
    })
    op2.addEventListener("click",()=>{
            cards.innerHTML = ``;
        for(var i = 0;i<specialCake.length;i++){

            cards.innerHTML += `<div class="s-card">
            <div class="sc-img"><img src="./specialCake/${specialCake[i].img}" alt=""></div><br>
            <div class="s-card-content">
            <h1 class="c-name">${specialCake[i].name}</h1>
            <h1 class="c-price">${specialCake[i].price1}rs-${specialCake[i].price2}rs</h1><br>
            <a href="./pages/eachp2.html?id=${i}" class="btn">details</a>
            </div>

        </div>`
        }
    })