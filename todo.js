let id = 0;
let completedTasks = 0;
function createTask(text){
    id++
    let container = document.createElement('div');
    container.className = "container";

    let row = document.createElement('div');
    row.className = "row";

    let col_2 = document.createElement('div');
    col_2.className = "col-2";

    let del_btn = document.createElement('button');
    del_btn.className = "btn btn-outline-danger del" + id.toString();
    del_btn.innerText = "מחק";

    let done_btn = document.createElement('button');
    done_btn.className = "btn btn-outline-success done" + id.toString();
    done_btn.innerText = "סיימתי";

    let col_10 = document.createElement('div');
    col_10.className = "col-10 alert alert-dark ";
    col_10.innerText = text;
    

    col_2.appendChild(del_btn);
    col_2.appendChild(done_btn);

    row.appendChild(col_2);
    row.appendChild(col_10);
    container.appendChild(row);

    return container;

}

function addTask(task)
{
    main_body = document.querySelector('.main-body');
    main_body.appendChild(task);
    let del_id = 'del' + id.toString();
    let done_id = 'done' + id.toString();
    let del_btn = document.querySelector('.' + del_id);
    let done_btn = document.querySelector('.' + done_id);

    del_btn.addEventListener('click',function(e){
        task = e.target.parentElement.parentElement.parentElement;
        task.parentElement.removeChild(task);    
    });
    done_btn.addEventListener('click',function(e){
        task2 = e.target.parentElement.parentElement.parentElement;
        task2.parentElement.removeChild(task);
        completedTasks++;
        text = "מספר משימות שהושלמו: " + completedTasks.toString();
        let header = document.querySelector(".display-4");
        header.innerText = text;
    });
}

let submit_btn = document.querySelector("#add");
submit_btn.addEventListener('click', function(e){
    e.preventDefault();
    let input = document.querySelector("#input");
    if(input.value == "")
        return;
    addTask(createTask(input.value)); 
    input.value = null;   
});


