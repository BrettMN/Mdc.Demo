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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2tzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztzQkFJYSxLQUFLOzs7Ozs7Ozt1Q0FKVixNQUFNOzs0QkFDTixJQUFJOzs7QUFHQyxpQkFBSztBQUtILHlCQUxGLEtBQUssQ0FLRixJQUFJLEVBQ2hCOzs7eUJBSEEsS0FBSyxHQUFHLFdBQVc7O0FBS2Ysd0JBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2lCQUNwQjs7NkJBVFEsS0FBSzs7MkJBV04sb0JBQUU7QUFDTiw0QkFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztxQkFFM0I7OzsyQkFFaUIsNEJBQUMsSUFBSSxFQUFDO0FBQ3BCLDRCQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUMvQiw0QkFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQzlCOzs7MkJBRVMsb0JBQUMsTUFBTSxFQUFDO0FBQ2QsNEJBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUVoQzs7OzZCQXhCUSxLQUFLO0FBQUwscUJBQUssR0FEakIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUNBLEtBQUssS0FBTCxLQUFLO3VCQUFMLEtBQUsiLCJmaWxlIjoidGFza3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0RhdGF9IGZyb20gJy9hcHAvZGF0YSc7XHJcblxyXG5AaW5qZWN0KERhdGEpXHJcbmV4cG9ydCBjbGFzcyBUYXNrc3tcclxuXHJcbiAgICAvL2NvbGxlY3Rpb247XHJcbiAgICB0aXRsZSA9ICdUYXNrIExpc3QnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgLy90aGlzLmNvbGxlY3Rpb24gPSBbe2lkOiAwLCBkZXNjcmlwdGlvbjondGhpbmcnLCBjb21wbGV0ZTp0cnVlfSwge2lkOjEsIGRlc2NyaXB0aW9uOid0aGluZyB0d28nLCBjb21wbGV0ZTpmYWxzZX1dO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGUoKXtcclxuICAgICAgICB0aGlzLmRhdGEuZ2V0QWxsVGFza3MoKTtcclxuICAgICAgICAvLy50aGVuKGRhdGEgPT4gdGhpcy5jb2xsZWN0aW9uID0gZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlQ29tcGxldGVUYXNrKHRhc2spe1xyXG4gICAgICAgIHRhc2suY29tcGxldGUgPSAhdGFzay5jb21wbGV0ZTtcclxuICAgICAgICB0aGlzLmRhdGEudXBkYXRlVGFzayh0YXNrKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUYXNrKHRhc2tJZCl7XHJcbiAgICAgICAgdGhpcy5kYXRhLmRlbGV0ZVRhc2sodGFza0lkKTtcclxuICAgICAgICAvLy50aGVuKGRhdGEgPT4gdGhpcy5jb2xsZWN0aW9uID0gZGF0YSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=