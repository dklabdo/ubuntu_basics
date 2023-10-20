let aSideBtn = document.getElementById('sideBarBtn')
let aSide = document.getElementById('sideBar')
console.log(aSideBtn);

aSideBtn.onclick = ()=>{
    aSide.classList.toggle('animation')
}

aSide.onblur = ()=>{
    aSide.classList.remove('animation')
}


function display(val){
    let temp = document.getElementById(`s${val}`);
    for(let i = 0 ; i<=13 ;i++){
        if(i == val){
            temp.classList.remove('hidden')
        }
        else{
            let rm = document.getElementById(`s${i}`); 
            rm.classList.add('hidden');
            aSide.classList.remove('animation')
        }
    }
    
}