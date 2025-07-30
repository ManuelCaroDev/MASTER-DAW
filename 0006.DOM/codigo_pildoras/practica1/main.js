const tasks = [
    {
        description: "Ir a hacer la compra",
        completed: false
    },
    {
        description: "Crear el archivo html",
        completed: true
    },
    {
        description: "Arreglar el coche",
        completed: false
    },
    {
        description: "Crear proyecto millonario",
        completed: false
    },
    {
        description: "Enlazar el archivo js al HTML",
        completed: true
    },
    {
        description: "Ir al gimnasio",
        completed: true
    },
    {
        description: "Tejer una camiseta",
        completed: false
    },
    {
        description: "Ir a comprar agua",
        completed: false
    },
    {
        description: "Fregar los platos",
        completed: true
    }

]

//funcion pintar tareas a la que le llega un array de tareas al cual nombramos como tasksTo Print
const printTasks = (tasksToPrint) => {
    //Recogemos el contenedor donde queremos introducir cada tarea
    const ul = document.querrySelector(".list");
    //limpiamos el contenedor innerHTML vacio por si tuviera alguna tarea pintada previamente como puede pasar en el futuro
    ul.innerHTML = "";

    //Recorremos el array de tareas que nos ha llegado a nuestra funcion
    for(let i = 0; i < tasksToPrint.length; i++) {
        //guardamos cada tarea en la variable task recien creada
        const task = tasksToPrint[i];

        //creamos nuestra tarea, seria un "li"
        const li = document.createElement("li");

        //añadimos el contenido de texto al li que sera la descripcion de la tarea
        li.textContent = task.description;

        //añadimos el evento click a la lista, que llamara a una funcion completar a la que le enviaremos la posicion 
        // de la tarea a la que le hemos hecho click, esta funcion la veremos creada mas adelante
        li.addEventListener("click", () => complete(i));

        //si la tarea estuviese completada... le añadiriamos la clase "completed", en caso contrario no añadimos ninguna clase
        if (task.completed === true) {
            li.className = "completed"
        }

        //añadimos la tarea a la lista de tareas
        ul.appendChild(li);
    }
}

//fumcion ordenar tareas a la que le llega un array de tareas al cual nombramos como taskToOrder
const orderTasks = (tasksToOrder) => {
    //utilizaremos el metodo de arrays sort para ordenar, a y b representaran un elemento y otro, iran variando
    tasksToOrder.sort((a, b) => {
        //mandamos las tareas completadas al final con return 1 comparandolas con el resto
        if (a.completed && b.completed) {
            return 1;
        }
        //mandamos las tareas NO completadas al principio con return -1 comparandolas con el resto
        if (!a.completed && b.completed) {
            return -1;
        }
        //En cualquier caso, no cambia el orden relativo
        return 0;        
    });
    // pintamos las tareas una vez estaen ordenadas
    printTasks(tasksToOrder);
}

//llamada la funcion
orderTasks(tasks);