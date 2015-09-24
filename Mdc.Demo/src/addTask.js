import {customElement, inject} from 'aurelia-framework';
import {Data} from '/app/data';
import {Task} from '/app/task';

@customElement('addtask')
@inject(Data)
export class AddTask{

    constructor(data){
        this.data = data;
    }

    activate(){
        this.task = new Task();
    }

    saveNewTask(){
        this.data.saveTask(this.task)
        this.task = new Task();
    }
    
    clearNewTask(){
        this.task.description = '';
    }
}