import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {Task} from '/app/task';


//let endpoint = 'http://localhost:65507/api/tasks';
//let getEndpointWithId = id => `http://localhost:65507/api/tasks/${id}`;

let endpoint = '/api/tasks';
let getEndpointWithId = id => `/api/tasks/${id}`;




@inject(HttpClient)
export class Data{    

    deleteTaskById(id){
        let index = -1;
        for(let i = 0, taskCount = this.tasks.length; i < taskCount; i++ ){
            if(this.tasks[i].id == id){
                index = i;
                break;
            }
        }
        if(index >=0){
            this.splice = this.tasks.splice(index, 1);
        }
    }
    pushTask(task){
        this.tasks.push(task);
        let swapped;
        do {
            swapped = false;
            for (let i=0, stop = this.tasks.length - 1 ; i < stop; i++) {
                if (this.tasks[i].id > this.tasks[i+1].id) {
                    var temp = this.tasks[i];
                    this.tasks[i] = this.tasks[i+1];
                    this.tasks[i+1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
        
    }

    constructor(http){
        this.http = http;
        this.tasks = [];
    }

    getAllTasks(){
        return this.http.get(endpoint)
            .then(message =>  JSON.parse(message.response))        
            .then(data => this.tasks = data);
    }

    deleteTask(taskId){
        return this.http.delete(getEndpointWithId(taskId))              
            .then(message =>  JSON.parse(message.response))
            .then(this.deleteTaskById(taskId));
    }

    getTask(taskId){        
        return this.http.get(getEndpointWithId(taskId))
            .then(message =>  JSON.parse(message.response));
    }
                

    saveTask(task){                
        return this.http.post(endpoint, task)
            .then(message =>  JSON.parse(message.response))       
            .then(data => this.pushTask(data));
    }

    updateTask(task){
        return this.http.put(getEndpointWithId(task.id), task)      
            .then(message =>  JSON.parse(message.response))          
            .then(task => {
                this.deleteTaskById(task.id);
                return task;
            }) 
            //.then(data => this.tasks.push(data));
        .then(data => this.pushTask(data));
    }

}