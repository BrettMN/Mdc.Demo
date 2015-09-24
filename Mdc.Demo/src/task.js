import {computedFrom} from 'aurelia-framework';

export class Task{

    constructor(id, description, complete){
        this.id = id;
        this.description = description;
        this.complete = complete;
    }

    //@computedFrom('complete')
    //getCheckedClass(){
    //    return this.complete ? 'fa fa-2x fa-check-circle-o' : 'fa fa-2x  fa-circle-o';
    //}
}