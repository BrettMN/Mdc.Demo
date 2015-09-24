System.register(['aurelia-framework', 'aurelia-router', '/app/data', '/app/task'], function (_export) {
    'use strict';

    var inject, Router, Data, Task, AddTask;

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
            AddTask = (function () {
                function AddTask(data, router) {
                    _classCallCheck(this, _AddTask);

                    this.title = 'Edit Task';

                    this.data = data;
                    this.router = router;
                }

                _createClass(AddTask, [{
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

                var _AddTask = AddTask;
                AddTask = inject(Data, Router)(AddTask) || AddTask;
                return AddTask;
            })();

            _export('AddTask', AddTask);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRUYXNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztvQ0FPYSxPQUFPOzs7Ozs7Ozt1Q0FQWixNQUFNOztvQ0FDTixNQUFNOzs0QkFDTixJQUFJOzs0QkFDSixJQUFJOzs7QUFJQyxtQkFBTztBQUlMLHlCQUpGLE9BQU8sQ0FJSixJQUFJLEVBQUUsTUFBTSxFQUFDOzs7eUJBRnpCLEtBQUssR0FBRyxXQUFXOztBQUdmLHdCQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQix3QkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7aUJBQ3hCOzs2QkFQUSxPQUFPOzsyQkFTUixrQkFBQyxNQUFNLEVBQUM7OztBQUNaLDRCQUFJLEVBQUUsR0FBSSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzlCLDRCQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FDcEIsSUFBSSxDQUFDLFVBQUEsSUFBSTttQ0FBSSxNQUFLLElBQUksR0FBRyxJQUFJO3lCQUFBLENBQUMsQ0FBQztxQkFDbkM7OzsyQkFFTyxvQkFBRTtBQUNOLDRCQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRWhDLDRCQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN4Qyw0QkFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUE7cUJBQzVCOzs7K0JBcEJRLE9BQU87QUFBUCx1QkFBTyxHQURuQixNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUNSLE9BQU8sS0FBUCxPQUFPO3VCQUFQLE9BQU8iLCJmaWxlIjoiZWRpdFRhc2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcbmltcG9ydCB7RGF0YX0gZnJvbSAnL2FwcC9kYXRhJztcclxuaW1wb3J0IHtUYXNrfSBmcm9tICcvYXBwL3Rhc2snO1xyXG5cclxuXHJcbkBpbmplY3QoRGF0YSwgUm91dGVyKVxyXG5leHBvcnQgY2xhc3MgQWRkVGFza3tcclxuXHJcbiAgICB0aXRsZSA9ICdFZGl0IFRhc2snO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRhdGEsIHJvdXRlcil7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZShwYXJhbXMpe1xyXG4gICAgICAgIGxldCBpZCA9ICBwYXJzZUludChwYXJhbXMuaWQpO1xyXG4gICAgICAgIHRoaXMuZGF0YS5nZXRUYXNrKGlkKSAgICAgICAgICAgIFxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4gdGhpcy50YXNrID0gZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZVRhc2soKXtcclxuICAgICAgICB0aGlzLmRhdGEudXBkYXRlVGFzayh0aGlzLnRhc2spO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLnJvdXRlci5nZW5lcmF0ZSgndGFza3MnKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZSh1cmwpXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=