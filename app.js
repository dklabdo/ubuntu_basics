let c1 = document.getElementById('first');
let txt = document.getElementById('text');
let list = document.getElementById('list')

function clicked1(){
    console.log('test');
    txt.classList.toggle('card')
    list.classList.toggle('hidden')
    c1.classList.toggle('display')
    c1.classList.toggle('card')
}
