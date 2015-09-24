import {inject} from 'aurelia-framework';
import {Router} from "aurelia-router";
import {Data} from '/app/data';
import {Task} from '/app/task';


@inject(Data, Router)
export class AddTask{

    title = 'Edit Task';

    constructor(data, router){
        this.data = data;
        this.router = router;
    }

    activate(params){
        let id =  parseInt(params.id);
        this.data.getTask(id)            
        .then(data => this.task = data);
    }

    saveTask(){
        this.data.updateTask(this.task);
        
        let url = this.router.generate('tasks');
        this.router.navigate(url)
    }
}