// ------ functions deceleration--------//

const arr = []

function addTask(task){
    arr.push(task);
    console.log(`Task has added: ${task}`)
}

function removeTask(index, count){
    arr.splice(index - 1, count)
    console.log(`task deleted`)
}

function updateTask(index, task){
    arr[index] = task
}

function display(){
    let length = arr.length;
    for(let i =0; i<length ;i++){
        console.log(`${i+1} : ${arr[i]}`);
    }
}


addTask("Wakeup early");
addTask("Go to GYM");
addTask("Study hard");
addTask("Drink 4Ltr of water")
addTask("Running for 45 min")

display();

console.log("deleted task")
removeTask(5,1)

display();

console.log("updated task")
updateTask(3, "Drink 5 Ltr of water");

display();

