let answer = document.getElementById('answer');

document.getElementById('form').addEventListener('submit',(e)=>{e.preventDefault()})


function chekTask(val){
    console.log('test');
    if(answer.value.includes('village/village_forest/road4/wood_house')){
        answer.style.border = '3px solid green'
        alert('Congratulation first task completed')
    }
    else{
        answer.style.border = '3px solid red'
    }
}