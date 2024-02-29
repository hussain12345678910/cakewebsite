var op1 = document.getElementById("op-1");
var op2 = document.getElementById("op-2");
var op3 = document.getElementById("op-3");
var op4 = document.getElementById("op-4");
var op5 = document.getElementById("op-5");
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
        <div class="sc-img"><img src="../../cake&deserts/${cakeAndDeserts[i].img}" alt=""></div><br>
        <div class="s-card-content">
            <h1 class="c-name">${cakeAndDeserts[i].name}</h1>
            <h1 class="c-price">${cakeAndDeserts[i].price1}rs-${cakeAndDeserts[i].price2}rs</h1><br>
            <a href="./apDetail1.html?id=${i}" class="btn">details</a>
        </div>
    </div>`
    }

    op1.addEventListener("click",()=>{

            cards.innerHTML = ``
        
        for(var i = 0;i<cakeAndDeserts.length;i++){
            cards.innerHTML += `<div class="s-card">
            <div class="sc-img"><img src="../../cake&deserts/${cakeAndDeserts[i].img}" alt=""></div><br>
            <div class="s-card-content">
            <h1 class="c-name">${cakeAndDeserts[i].name}</h1>
            <h1 class="c-price">${cakeAndDeserts[i].price1}rs-${cakeAndDeserts[i].price2}rs</h1><br>
            <a href="./apDetail1.html?id=${i}" class="btn">details</a>
            </div>

        </div>`
        }
    })
    op2.addEventListener("click",()=>{
            cards.innerHTML = ``;
        for(var i = 0;i<specialCake.length;i++){

            cards.innerHTML += `<div class="s-card">
            <div class="sc-img"><img src="../../specialCake/${specialCake[i].img}" alt=""></div><br>
            <div class="s-card-content">
            <h1 class="c-name">${specialCake[i].name}</h1>
            <h1 class="c-price">${specialCake[i].price1}rs-${specialCake[i].price2}rs</h1><br>
            <a href="./apDetail2.html?id=${i}" class="btn">details</a>
            </div>

        </div>`
        }
    })
    op3.addEventListener("click",()=>{
            cards.innerHTML = ``;
        for(var i = 0;i<weddingCakes.length;i++){

            cards.innerHTML += `<div class="s-card">
            <div class="sc-img"><img src="../../weddingcakes/${weddingCakes[i].img}" alt=""></div><br>
            <div class="s-card-content">
            <h1 class="c-name">${weddingCakes[i].name}</h1>
            <h1 class="c-price">${weddingCakes[i].price1}rs-${weddingCakes[i].price2}rs</h1><br>
            <a href="./apDetail3.html?id=${i}" class="btn">details</a>
            </div>

        </div>`
        }
    })
    op4.addEventListener("click",()=>{
            cards.innerHTML = ``;
        for(var i = 0;i<birthdaycakes.length;i++){

            cards.innerHTML += `<div class="s-card">
            <div class="sc-img"><img src="../../birthdaycakes/${birthdaycakes[i].img}" alt=""></div><br>
            <div class="s-card-content">
            <h1 class="c-name">${birthdaycakes[i].name}</h1>
            <h1 class="c-price">${birthdaycakes[i].price1}rs-${birthdaycakes[i].price2}rs</h1><br>
            <a href="./apDetail4.html?id=${i}" class="btn">details</a>
            </div>

        </div>`
        }
    })
    op5.addEventListener("click",()=>{
            cards.innerHTML = ``;
        for(var i = 0;i<anniversarycakes.length;i++){

            cards.innerHTML += `<div class="s-card">
            <div class="sc-img"><img src="../../anniversarycakes/${anniversarycakes[i].img}" alt=""></div><br>
            <div class="s-card-content">
            <h1 class="c-name">${anniversarycakes[i].name}</h1>
            <h1 class="c-price">${anniversarycakes[i].price1}rs-${anniversarycakes[i].price2}rs</h1><br>
            <a href="./apDetail5.html?id=${i}" class="btn">details</a>
            </div>

        </div>`
        }
    })