//Traernos la lista de tareas del almacenamiento local
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//Funcion para agregar una tarea 
export const addTask = (tasks) => {
    const newTask = {
        id: Date.now(),
        text: tasks, 
        completed: false, 
    };
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringif(tasks));
};

//Funcion para eliminar una tarea 
export const deleteTask = (id) => {
    tasks = tasks.filter((tasks) => tasks.id !== parseInt(id));
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

//Funcion para actualizar la tarea 
export const toggleTask = (id) =>{
tasks = tasks.map((task) => {
    if(task.id === parseInt (id)){
        task.completed = !task.completed;
        }
        return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Funcion para llervar las tareas 
export const getTasks = () => tasks; 