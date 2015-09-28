import {customElement, inject} from 'aurelia-framework';
import {Router} from "aurelia-router";
import {Data} from '/app/data';
import {Task} from '/app/task';

@customElement('addtask')
@inject(Data, Router)
export class AddTask{

    constructor(data, router){
        this.data = data;
        this.router = router;
    }

    activate(){
        this.task = new Task();
    }

    saveNewTask(){
        this.data.saveTask(this.task)
        this.task = new Task();

        ////////////////////////////////////////
        //let url = this.router.generate('tasks');
        //this.router.navigate(url)
    }
    
    clearNewTask(){
        this.task.description = '';
    }
} 