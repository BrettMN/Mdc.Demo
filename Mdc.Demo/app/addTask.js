System.register(['aurelia-framework', '/app/data', '/app/task'], function (_export) {
    'use strict';

    var customElement, inject, Data, Task, AddTask;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            customElement = _aureliaFramework.customElement;
            inject = _aureliaFramework.inject;
        }, function (_appData) {
            Data = _appData.Data;
        }, function (_appTask) {
            Task = _appTask.Task;
        }],
        execute: function () {
            AddTask = (function () {
                function AddTask(data) {
                    _classCallCheck(this, _AddTask);

                    this.data = data;
                }

                _createClass(AddTask, [{
                    key: 'activate',
                    value: function activate() {
                        this.task = new Task();
                    }
                }, {
                    key: 'saveNewTask',
                    value: function saveNewTask() {
                        this.data.saveTask(this.task);
                        this.task = new Task();
                    }
                }, {
                    key: 'clearNewTask',
                    value: function clearNewTask() {
                        this.task.description = '';
                    }
                }]);

                var _AddTask = AddTask;
                AddTask = inject(Data)(AddTask) || AddTask;
                AddTask = customElement('addtask')(AddTask) || AddTask;
                return AddTask;
            })();

            _export('AddTask', AddTask);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZFRhc2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzJDQU1hLE9BQU87Ozs7Ozs7OzhDQU5aLGFBQWE7dUNBQUUsTUFBTTs7NEJBQ3JCLElBQUk7OzRCQUNKLElBQUk7OztBQUlDLG1CQUFPO0FBRUwseUJBRkYsT0FBTyxDQUVKLElBQUksRUFBQzs7O0FBQ2Isd0JBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2lCQUNwQjs7NkJBSlEsT0FBTzs7MkJBTVIsb0JBQUU7QUFDTiw0QkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO3FCQUMxQjs7OzJCQUVVLHVCQUFFO0FBQ1QsNEJBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUM3Qiw0QkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO3FCQUMxQjs7OzJCQUVXLHdCQUFFO0FBQ1YsNEJBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztxQkFDOUI7OzsrQkFqQlEsT0FBTztBQUFQLHVCQUFPLEdBRG5CLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FDQSxPQUFPLEtBQVAsT0FBTztBQUFQLHVCQUFPLEdBRm5CLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FFWixPQUFPLEtBQVAsT0FBTzt1QkFBUCxPQUFPIiwiZmlsZSI6ImFkZFRhc2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0RhdGF9IGZyb20gJy9hcHAvZGF0YSc7XHJcbmltcG9ydCB7VGFza30gZnJvbSAnL2FwcC90YXNrJztcclxuXHJcbkBjdXN0b21FbGVtZW50KCdhZGR0YXNrJylcclxuQGluamVjdChEYXRhKVxyXG5leHBvcnQgY2xhc3MgQWRkVGFza3tcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKXtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlKCl7XHJcbiAgICAgICAgdGhpcy50YXNrID0gbmV3IFRhc2soKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlTmV3VGFzaygpe1xyXG4gICAgICAgIHRoaXMuZGF0YS5zYXZlVGFzayh0aGlzLnRhc2spXHJcbiAgICAgICAgdGhpcy50YXNrID0gbmV3IFRhc2soKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2xlYXJOZXdUYXNrKCl7XHJcbiAgICAgICAgdGhpcy50YXNrLmRlc2NyaXB0aW9uID0gJyc7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=