
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

// this is remind the function
function addbutton() {
    var addlist = document.getElementById('addbutton').value;
    totalAll.push(addlist);

    addbutton.innerHTML = totalAll.length

    document.getElementById('addcart').innerHTML = totalAll

    document.getElementById('addlist').innerHTML = totalAll.length
}


allScreen()