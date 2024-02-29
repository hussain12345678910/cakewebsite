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
for (var i = 0; i < allproduct.length; i++) {

    cards.innerHTML += `<div class="s-card">
        <div class="sc-img"><img src="../../allimages/${allproduct[i].img}" alt=""></div><br>
        <div class="s-card-content">
            <h1 class="c-name">${allproduct[i].name}</h1>
            <h1 class="c-price">${allproduct[i].price1}rs-${allproduct[i].price2}rs</h1><br>
            <a href="./adcp.html?id=${allproduct[i].id}" class="btn">details</a>
        </div>
    </div>`
}


var search = document.getElementById("search")


search.addEventListener("keyup", (e) => {
    cards.innerHTML = ""
    let filterProducts = allproduct.filter((i) => {
        return i.name.toLowerCase().includes(e.target.value.toLowerCase())
    })


    for (var i = 0; i < filterProducts.length; i++) {
        cards.innerHTML += `<div class="s-card">
            <div class="sc-img"><img src="../../allimages/${filterProducts[i].img}" alt=""></div><br>
            <div class="s-card-content">
                <h1 class="c-name">${filterProducts[i].name}</h1>
                <h1 class="c-price">${filterProducts[i].price1}rs-${filterProducts[i].price2}rs</h1><br>
                <a href="./adcp.html?id=${filterProducts[i].id}" class="btn">details</a>
            </div>
        </div>`
    }

})