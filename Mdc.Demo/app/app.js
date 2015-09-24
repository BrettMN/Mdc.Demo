System.register(['bootstrap'], function (_export) {
    'use strict';

    var App;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_bootstrap) {}],
        execute: function () {
            App = (function () {
                function App() {
                    _classCallCheck(this, App);
                }

                _createClass(App, [{
                    key: 'configureRouter',
                    value: function configureRouter(config, router) {
                        config.title = 'ToDo';
                        config.map([{ route: ['', 'tasks'], name: 'tasks', moduleId: 'tasks', nav: true, title: 'Tasks' }, { route: ['addtask'], name: 'addTask', moduleId: 'addTask', nav: true, title: 'Add Task' }, { route: ['edittask/:id'], name: 'editTask', moduleId: 'edittask', title: 'Edit Task' }]);
                        this.router = router;
                    }
                }]);

                return App;
            })();

            _export('App', App);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7UUFLYSxHQUFHOzs7Ozs7Ozs7QUFBSCxlQUFHO3lCQUFILEdBQUc7MENBQUgsR0FBRzs7OzZCQUFILEdBQUc7OzJCQUNHLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUM7QUFDM0IsOEJBQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO0FBQ3RCLDhCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1AsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFFLEVBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLE9BQU8sRUFBQyxFQUM5RSxFQUFFLEtBQUssRUFBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBQyxTQUFTLEVBQUUsUUFBUSxFQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxVQUFVLEVBQUMsRUFDcEYsRUFBRSxLQUFLLEVBQUMsQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLEVBQUMsVUFBVSxFQUFFLFFBQVEsRUFBQyxVQUFVLEVBQUUsS0FBSyxFQUFDLFdBQVcsRUFBQyxDQUNyRixDQUFDLENBQUM7QUFDSCw0QkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7cUJBQ3hCOzs7dUJBVFEsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcCc7XHJcbi8vaW1wb3J0ICdib290c3RyYXAvY3NzL2Jvb3RzdHJhcC5jc3MhJztcclxuLy9pbXBvcnQgJ2ZvbnQtYXdlc29tZS9jc3MvZm9udC1hd2Vzb21lLmNzcyEnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBcHAge1xyXG4gICAgY29uZmlndXJlUm91dGVyKGNvbmZpZywgcm91dGVyKXtcclxuICAgICAgICBjb25maWcudGl0bGUgPSAnVG9Ebyc7XHJcbiAgICAgICAgY29uZmlnLm1hcChbXHJcbiAgICAgICAgICAgIHsgcm91dGU6WycnLCd0YXNrcyddLCBuYW1lOid0YXNrcycsIG1vZHVsZUlkOid0YXNrcycsIG5hdjp0cnVlLCB0aXRsZTonVGFza3MnfSxcclxuICAgICAgICAgICAgeyByb3V0ZTpbJ2FkZHRhc2snXSwgbmFtZTonYWRkVGFzaycsIG1vZHVsZUlkOidhZGRUYXNrJywgbmF2OnRydWUsIHRpdGxlOidBZGQgVGFzayd9LFxyXG4gICAgICAgICAgICB7IHJvdXRlOlsnZWRpdHRhc2svOmlkJ10sIG5hbWU6J2VkaXRUYXNrJywgbW9kdWxlSWQ6J2VkaXR0YXNrJywgdGl0bGU6J0VkaXQgVGFzayd9LFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9