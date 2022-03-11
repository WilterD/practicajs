document.addEventListener('DOMContentLoaded',function(){

    const btn = document.getElementById('add');

    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const table = document.getElementById('table');
    const alert = document.querySelector('#alert');

    btn.onclick = addTodo;


  

    function addTodo(){
        if(title.value === '' || description.value===''){
        alert.classList.remove('d-none');
        alert.innerText = 'error';
        }else{
            console.log('ok');
        }
    }

});