System.register(['aurelia-framework', '/app/data'], function (_export) {
    'use strict';

    var inject, Data, Tasks;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_appData) {
            Data = _appData.Data;
        }],
        execute: function () {
            Tasks = (function () {
                function Tasks(data) {
                    _classCallCheck(this, _Tasks);

                    this.title = 'Task List';

                    this.data = data;
                }

                _createClass(Tasks, [{
                    key: 'activate',
                    value: function activate() {
                        this.data.getAllTasks();
                    }
                }, {
                    key: 'toggleCompleteTask',
                    value: function toggleCompleteTask(task) {
                        task.complete = !task.complete;
                        this.data.updateTask(task);
                    }
                }, {
                    key: 'deleteTask',
                    value: function deleteTask(taskId) {
                        this.data.deleteTask(taskId);
                    }
                }]);

                var _Tasks = Tasks;
                Tasks = inject(Data)(Tasks) || Tasks;
                return Tasks;
            })();

            _export('Tasks', Tasks);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2tzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztzQkFJYSxLQUFLOzs7Ozs7Ozt1Q0FKVixNQUFNOzs0QkFDTixJQUFJOzs7QUFHQyxpQkFBSztBQUlILHlCQUpGLEtBQUssQ0FJRixJQUFJLEVBQ2hCOzs7eUJBSEEsS0FBSyxHQUFHLFdBQVc7O0FBSWYsd0JBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2lCQUNwQjs7NkJBUFEsS0FBSzs7MkJBU04sb0JBQUU7QUFDTiw0QkFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztxQkFDM0I7OzsyQkFFaUIsNEJBQUMsSUFBSSxFQUFDO0FBQ3BCLDRCQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUMvQiw0QkFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQzlCOzs7MkJBRVMsb0JBQUMsTUFBTSxFQUFDO0FBQ2QsNEJBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUNoQzs7OzZCQXBCUSxLQUFLO0FBQUwscUJBQUssR0FEakIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUNBLEtBQUssS0FBTCxLQUFLO3VCQUFMLEtBQUsiLCJmaWxlIjoidGFza3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0RhdGF9IGZyb20gJy9hcHAvZGF0YSc7XHJcblxyXG5AaW5qZWN0KERhdGEpXHJcbmV4cG9ydCBjbGFzcyBUYXNrc3tcclxuXHJcbiAgICB0aXRsZSA9ICdUYXNrIExpc3QnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZSgpe1xyXG4gICAgICAgIHRoaXMuZGF0YS5nZXRBbGxUYXNrcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUNvbXBsZXRlVGFzayh0YXNrKXtcclxuICAgICAgICB0YXNrLmNvbXBsZXRlID0gIXRhc2suY29tcGxldGU7XHJcbiAgICAgICAgdGhpcy5kYXRhLnVwZGF0ZVRhc2sodGFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVGFzayh0YXNrSWQpe1xyXG4gICAgICAgIHRoaXMuZGF0YS5kZWxldGVUYXNrKHRhc2tJZCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=