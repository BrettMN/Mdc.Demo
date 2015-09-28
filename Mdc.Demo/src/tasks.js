import {inject} from 'aurelia-framework';
import {Data} from '/app/data';

@inject(Data)
export class Tasks{

    title = 'Task List';

    constructor(data)
    {
        this.data = data;
    }

    activate(){
        this.data.getAllTasks();
    }

    toggleCompleteTask(task){
        task.complete = !task.complete;
        this.data.updateTask(task);
    }

    deleteTask(taskId){
        this.data.deleteTask(taskId);
    }
}