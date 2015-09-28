System.register(['aurelia-framework', 'aurelia-router', '/app/data', '/app/task'], function (_export) {
    'use strict';

    var inject, Router, Data, Task, EditTask;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaRouter) {
            Router = _aureliaRouter.Router;
        }, function (_appData) {
            Data = _appData.Data;
        }, function (_appTask) {
            Task = _appTask.Task;
        }],
        execute: function () {
            EditTask = (function () {
                function EditTask(data, router) {
                    _classCallCheck(this, _EditTask);

                    this.data = data;
                    this.router = router;
                }

                _createClass(EditTask, [{
                    key: 'activate',
                    value: function activate(params) {
                        var _this = this;

                        var id = parseInt(params.id);
                        this.data.getTask(id).then(function (data) {
                            return _this.task = data;
                        });
                    }
                }, {
                    key: 'saveTask',
                    value: function saveTask() {
                        this.data.updateTask(this.task);

                        var url = this.router.generate('tasks');
                        this.router.navigate(url);
                    }
                }]);

                var _EditTask = EditTask;
                EditTask = inject(Data, Router)(EditTask) || EditTask;
                return EditTask;
            })();

            _export('EditTask', EditTask);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRUYXNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztvQ0FNYSxRQUFROzs7Ozs7Ozt1Q0FOYixNQUFNOztvQ0FDTixNQUFNOzs0QkFDTixJQUFJOzs0QkFDSixJQUFJOzs7QUFHQyxvQkFBUTtBQUVOLHlCQUZGLFFBQVEsQ0FFTCxJQUFJLEVBQUUsTUFBTSxFQUFDOzs7QUFDckIsd0JBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLHdCQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztpQkFDeEI7OzZCQUxRLFFBQVE7OzJCQU9ULGtCQUFDLE1BQU0sRUFBQzs7O0FBQ1osNEJBQUksRUFBRSxHQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDOUIsNEJBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUNwQixJQUFJLENBQUMsVUFBQSxJQUFJO21DQUFJLE1BQUssSUFBSSxHQUFHLElBQUk7eUJBQUEsQ0FBQyxDQUFDO3FCQUNuQzs7OzJCQUVPLG9CQUFFO0FBQ04sNEJBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFaEMsNEJBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hDLDRCQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtxQkFDNUI7OztnQ0FsQlEsUUFBUTtBQUFSLHdCQUFRLEdBRHBCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQ1IsUUFBUSxLQUFSLFFBQVE7dUJBQVIsUUFBUSIsImZpbGUiOiJlZGl0VGFzay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuaW1wb3J0IHtEYXRhfSBmcm9tICcvYXBwL2RhdGEnO1xyXG5pbXBvcnQge1Rhc2t9IGZyb20gJy9hcHAvdGFzayc7XHJcblxyXG5AaW5qZWN0KERhdGEsIFJvdXRlcilcclxuZXhwb3J0IGNsYXNzIEVkaXRUYXNre1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRhdGEsIHJvdXRlcil7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZShwYXJhbXMpe1xyXG4gICAgICAgIGxldCBpZCA9ICBwYXJzZUludChwYXJhbXMuaWQpO1xyXG4gICAgICAgIHRoaXMuZGF0YS5nZXRUYXNrKGlkKSAgICAgICAgICAgIFxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4gdGhpcy50YXNrID0gZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZVRhc2soKXtcclxuICAgICAgICB0aGlzLmRhdGEudXBkYXRlVGFzayh0aGlzLnRhc2spO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLnJvdXRlci5nZW5lcmF0ZSgndGFza3MnKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZSh1cmwpXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=