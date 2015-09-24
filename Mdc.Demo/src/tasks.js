import {inject} from 'aurelia-framework';
import {Data} from '/app/data';

@inject(Data)
export class Tasks{

    //collection;
    title = 'Task List';

    constructor(data)
    {
        //this.collection = [{id: 0, description:'thing', complete:true}, {id:1, description:'thing two', complete:false}];
        this.data = data;
    }

    activate(){
        this.data.getAllTasks();
        //.then(data => this.collection = data);
    }

    toggleCompleteTask(task){
        task.complete = !task.complete;
        this.data.updateTask(task);
    }

    deleteTask(taskId){
        this.data.deleteTask(taskId);
        //.then(data => this.collection = data);
    }
}