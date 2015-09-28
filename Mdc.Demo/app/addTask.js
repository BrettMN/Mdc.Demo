System.register(['aurelia-framework', 'aurelia-router', '/app/data', '/app/task'], function (_export) {
    'use strict';

    var customElement, inject, Router, Data, Task, AddTask;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            customElement = _aureliaFramework.customElement;
            inject = _aureliaFramework.inject;
        }, function (_aureliaRouter) {
            Router = _aureliaRouter.Router;
        }, function (_appData) {
            Data = _appData.Data;
        }, function (_appTask) {
            Task = _appTask.Task;
        }],
        execute: function () {
            AddTask = (function () {
                function AddTask(data, router) {
                    _classCallCheck(this, _AddTask);

                    this.data = data;
                    this.router = router;
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
                AddTask = inject(Data, Router)(AddTask) || AddTask;
                AddTask = customElement('addtask')(AddTask) || AddTask;
                return AddTask;
            })();

            _export('AddTask', AddTask);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZFRhc2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O21EQU9hLE9BQU87Ozs7Ozs7OzhDQVBaLGFBQWE7dUNBQUUsTUFBTTs7b0NBQ3JCLE1BQU07OzRCQUNOLElBQUk7OzRCQUNKLElBQUk7OztBQUlDLG1CQUFPO0FBRUwseUJBRkYsT0FBTyxDQUVKLElBQUksRUFBRSxNQUFNLEVBQUM7OztBQUNyQix3QkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsd0JBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2lCQUN4Qjs7NkJBTFEsT0FBTzs7MkJBT1Isb0JBQUU7QUFDTiw0QkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO3FCQUMxQjs7OzJCQUVVLHVCQUFFO0FBQ1QsNEJBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUM3Qiw0QkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO3FCQUsxQjs7OzJCQUVXLHdCQUFFO0FBQ1YsNEJBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztxQkFDOUI7OzsrQkF0QlEsT0FBTztBQUFQLHVCQUFPLEdBRG5CLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQ1IsT0FBTyxLQUFQLE9BQU87QUFBUCx1QkFBTyxHQUZuQixhQUFhLENBQUMsU0FBUyxDQUFDLENBRVosT0FBTyxLQUFQLE9BQU87dUJBQVAsT0FBTyIsImZpbGUiOiJhZGRUYXNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21FbGVtZW50LCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xyXG5pbXBvcnQge0RhdGF9IGZyb20gJy9hcHAvZGF0YSc7XHJcbmltcG9ydCB7VGFza30gZnJvbSAnL2FwcC90YXNrJztcclxuXHJcbkBjdXN0b21FbGVtZW50KCdhZGR0YXNrJylcclxuQGluamVjdChEYXRhLCBSb3V0ZXIpXHJcbmV4cG9ydCBjbGFzcyBBZGRUYXNre1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRhdGEsIHJvdXRlcil7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZSgpe1xyXG4gICAgICAgIHRoaXMudGFzayA9IG5ldyBUYXNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZU5ld1Rhc2soKXtcclxuICAgICAgICB0aGlzLmRhdGEuc2F2ZVRhc2sodGhpcy50YXNrKVxyXG4gICAgICAgIHRoaXMudGFzayA9IG5ldyBUYXNrKCk7XHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvL2xldCB1cmwgPSB0aGlzLnJvdXRlci5nZW5lcmF0ZSgndGFza3MnKTtcclxuICAgICAgICAvL3RoaXMucm91dGVyLm5hdmlnYXRlKHVybClcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2xlYXJOZXdUYXNrKCl7XHJcbiAgICAgICAgdGhpcy50YXNrLmRlc2NyaXB0aW9uID0gJyc7XHJcbiAgICB9XHJcbn0gIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9