
var button = "add cart"
var addbutton = "addbutton"
var addlist = "addlist"


var totalAll= []


document.getElementById('addcart')
.innerHTML = totalAll

document.getElementById('addbutton')
.innerHTML = totalAll

document.getElementById('addlist')
.innerHTML =  totalAll

function button() {
    const dataVar = document.getElementById('addbutton').value;
    totalAll.push(dataVar);

    addbutton.innerHTML = totalAll.length

    document.getElementById('addcart').innerHTML = totalAll

    document.getElementById('addlist').innerHTML = totalAll.length
}

allScreen()