System.register([], function (_export) {
    'use strict';

    var App;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            App = (function () {
                function App() {
                    _classCallCheck(this, App);
                }

                _createClass(App, [{
                    key: 'configureRouter',
                    value: function configureRouter(config, router) {
                        config.title = 'ToDo';
                        config.map([{ route: ['', 'tasks'], name: 'tasks', moduleId: 'tasks', nav: true, title: 'Tasks' }, { route: ['edittask/:id'], name: 'editTask', moduleId: 'edittask', title: 'Edit Task' }]);
                        this.router = router;
                    }
                }]);

                return App;
            })();

            _export('App', App);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7UUFBYSxHQUFHOzs7Ozs7Ozs7QUFBSCxlQUFHO3lCQUFILEdBQUc7MENBQUgsR0FBRzs7OzZCQUFILEdBQUc7OzJCQUNHLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUM7QUFDM0IsOEJBQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO0FBQ3RCLDhCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1AsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFFLEVBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLE9BQU8sRUFBQyxFQUU5RSxFQUFFLEtBQUssRUFBQyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBQyxVQUFVLEVBQUUsUUFBUSxFQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUMsV0FBVyxFQUFDLENBQ3JGLENBQUMsQ0FBQztBQUNILDRCQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztxQkFDeEI7Ozt1QkFUUSxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBcHAge1xyXG4gICAgY29uZmlndXJlUm91dGVyKGNvbmZpZywgcm91dGVyKXtcclxuICAgICAgICBjb25maWcudGl0bGUgPSAnVG9Ebyc7XHJcbiAgICAgICAgY29uZmlnLm1hcChbXHJcbiAgICAgICAgICAgIHsgcm91dGU6WycnLCd0YXNrcyddLCBuYW1lOid0YXNrcycsIG1vZHVsZUlkOid0YXNrcycsIG5hdjp0cnVlLCB0aXRsZTonVGFza3MnfSxcclxuICAgICAgICAgICAgLy97IHJvdXRlOlsnYWRkdGFzayddLCBuYW1lOidhZGRUYXNrJywgbW9kdWxlSWQ6J2FkZFRhc2snLCBuYXY6dHJ1ZSwgdGl0bGU6J0FkZCBUYXNrJ30sXHJcbiAgICAgICAgICAgIHsgcm91dGU6WydlZGl0dGFzay86aWQnXSwgbmFtZTonZWRpdFRhc2snLCBtb2R1bGVJZDonZWRpdHRhc2snLCB0aXRsZTonRWRpdCBUYXNrJ30sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==