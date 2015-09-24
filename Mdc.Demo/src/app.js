import 'bootstrap';
//import 'bootstrap/css/bootstrap.css!';
//import 'font-awesome/css/font-awesome.css!';


export class App {
    configureRouter(config, router){
        config.title = 'ToDo';
        config.map([
            { route:['','tasks'], name:'tasks', moduleId:'tasks', nav:true, title:'Tasks'},
            { route:['addtask'], name:'addTask', moduleId:'addTask', nav:true, title:'Add Task'},
            { route:['edittask/:id'], name:'editTask', moduleId:'edittask', title:'Edit Task'},
        ]);
        this.router = router;
    }
}