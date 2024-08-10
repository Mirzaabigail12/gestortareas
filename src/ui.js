import { getTasks } from "./task";

// Funcion para mostrarle al usurio las tareas 
export const renderTasks = () => {
    const taskList = document.getElementById("task-form");
    taskList.innerHTML = ""; 
    const tasks = getTasks();
    tasks.forEach ((task) => {
        const li = document.createElement("li");
        li.setAttribute("data-id", task.id);

        //Añadir clase solo si la tarea esta completada
        if(task.conpleted === true){
            li.classList.add("completed");
        }
        li.innerHTML = ` 
            ${ task.text}
            <button class="delete"> Eliminar </button>
            <button class="toggle"> ${ task.conpleted === true? "Deshacer" : "Completado" } </button>
        `;
        taskList.appendChild(li);
    });
          
};
