var x = document.querySelector("#ca1")
var y = document.querySelector("#todd")
var z = document.querySelector("#phil")
var count = 2
var t = document.querySelector(".badge")
var count1 = 418
var m = document.querySelector(".badge1")


function edit() {
    x.innerText = "Phil k";
}

function rem1() {
    y.remove();
    count--;
    t.innerText = count;

}

function rem2() {
    z.remove();
    count--;
    t.innerText = count;
}

function inc() {
    count1++;
    m.innerText = count1;
}