System.register(['aurelia-framework', 'aurelia-http-client', '/app/task'], function (_export) {
    'use strict';

    var inject, HttpClient, Task, endpoint, getEndpointWithId, Data;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaHttpClient) {
            HttpClient = _aureliaHttpClient.HttpClient;
        }, function (_appTask) {
            Task = _appTask.Task;
        }],
        execute: function () {
            endpoint = '/api/tasks';

            getEndpointWithId = function getEndpointWithId(id) {
                return '/api/tasks/' + id;
            };

            Data = (function () {
                _createClass(Data, [{
                    key: 'deleteTaskById',
                    value: function deleteTaskById(id) {
                        var index = -1;
                        for (var i = 0, taskCount = this.tasks.length; i < taskCount; i++) {
                            if (this.tasks[i].id == id) {
                                index = i;
                                break;
                            }
                        }
                        if (index >= 0) {
                            this.splice = this.tasks.splice(index, 1);
                        }
                    }
                }, {
                    key: 'pushTask',
                    value: function pushTask(task) {
                        this.tasks.push(task);
                        var swapped = undefined;
                        do {
                            swapped = false;
                            for (var i = 0, _stop = this.tasks.length - 1; i < _stop; i++) {
                                if (this.tasks[i].id > this.tasks[i + 1].id) {
                                    var temp = this.tasks[i];
                                    this.tasks[i] = this.tasks[i + 1];
                                    this.tasks[i + 1] = temp;
                                    swapped = true;
                                }
                            }
                        } while (swapped);
                    }
                }]);

                function Data(http) {
                    _classCallCheck(this, _Data);

                    this.http = http;
                    this.tasks = [];
                }

                _createClass(Data, [{
                    key: 'getAllTasks',
                    value: function getAllTasks() {
                        var _this = this;

                        return this.http.get(endpoint).then(function (message) {
                            return JSON.parse(message.response);
                        }).then(function (data) {
                            return _this.tasks = data;
                        });
                    }
                }, {
                    key: 'deleteTask',
                    value: function deleteTask(taskId) {
                        return this.http['delete'](getEndpointWithId(taskId)).then(function (message) {
                            return JSON.parse(message.response);
                        }).then(this.deleteTaskById(taskId));
                    }
                }, {
                    key: 'getTask',
                    value: function getTask(taskId) {
                        return this.http.get(getEndpointWithId(taskId)).then(function (message) {
                            return JSON.parse(message.response);
                        });
                    }
                }, {
                    key: 'saveTask',
                    value: function saveTask(task) {
                        var _this2 = this;

                        return this.http.post(endpoint, task).then(function (message) {
                            return JSON.parse(message.response);
                        }).then(function (data) {
                            return _this2.pushTask(data);
                        });
                    }
                }, {
                    key: 'updateTask',
                    value: function updateTask(task) {
                        var _this3 = this;

                        return this.http.put(getEndpointWithId(task.id), task).then(function (message) {
                            return JSON.parse(message.response);
                        }).then(function (task) {
                            _this3.deleteTaskById(task.id);
                            return task;
                        }).then(function (data) {
                            return _this3.pushTask(data);
                        });
                    }
                }]);

                var _Data = Data;
                Data = inject(HttpClient)(Data) || Data;
                return Data;
            })();

            _export('Data', Data);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,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Q0FBQztxQkFDdEM7Ozs0QkFyRVEsSUFBSTtBQUFKLG9CQUFJLEdBRGhCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FDTixJQUFJLEtBQUosSUFBSTt1QkFBSixJQUFJIiwiZmlsZSI6ImRhdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtaHR0cC1jbGllbnQnO1xyXG5pbXBvcnQge1Rhc2t9IGZyb20gJy9hcHAvdGFzayc7XHJcblxyXG5cclxuLy9sZXQgZW5kcG9pbnQgPSAnaHR0cDovL2xvY2FsaG9zdDo2NTUwNy9hcGkvdGFza3MnO1xyXG4vL2xldCBnZXRFbmRwb2ludFdpdGhJZCA9IGlkID0+IGBodHRwOi8vbG9jYWxob3N0OjY1NTA3L2FwaS90YXNrcy8ke2lkfWA7XHJcblxyXG5sZXQgZW5kcG9pbnQgPSAnL2FwaS90YXNrcyc7XHJcbmxldCBnZXRFbmRwb2ludFdpdGhJZCA9IGlkID0+IGAvYXBpL3Rhc2tzLyR7aWR9YDtcclxuXHJcblxyXG5cclxuXHJcbkBpbmplY3QoSHR0cENsaWVudClcclxuZXhwb3J0IGNsYXNzIERhdGF7ICAgIFxyXG5cclxuICAgIGRlbGV0ZVRhc2tCeUlkKGlkKXtcclxuICAgICAgICBsZXQgaW5kZXggPSAtMTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwLCB0YXNrQ291bnQgPSB0aGlzLnRhc2tzLmxlbmd0aDsgaSA8IHRhc2tDb3VudDsgaSsrICl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGFza3NbaV0uaWQgPT0gaWQpe1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaW5kZXggPj0wKXtcclxuICAgICAgICAgICAgdGhpcy5zcGxpY2UgPSB0aGlzLnRhc2tzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVzaFRhc2sodGFzayl7XHJcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG4gICAgICAgIGxldCBzd2FwcGVkO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgc3dhcHBlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpPTAsIHN0b3AgPSB0aGlzLnRhc2tzLmxlbmd0aCAtIDEgOyBpIDwgc3RvcDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YXNrc1tpXS5pZCA+IHRoaXMudGFza3NbaSsxXS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gdGhpcy50YXNrc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhc2tzW2ldID0gdGhpcy50YXNrc1tpKzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFza3NbaSsxXSA9IHRlbXA7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dhcHBlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IHdoaWxlIChzd2FwcGVkKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihodHRwKXtcclxuICAgICAgICB0aGlzLmh0dHAgPSBodHRwO1xyXG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxUYXNrcygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGVuZHBvaW50KVxyXG4gICAgICAgICAgICAudGhlbihtZXNzYWdlID0+ICBKU09OLnBhcnNlKG1lc3NhZ2UucmVzcG9uc2UpKSAgICAgICAgXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gdGhpcy50YXNrcyA9IGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRhc2sodGFza0lkKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShnZXRFbmRwb2ludFdpdGhJZCh0YXNrSWQpKSAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC50aGVuKG1lc3NhZ2UgPT4gIEpTT04ucGFyc2UobWVzc2FnZS5yZXNwb25zZSkpXHJcbiAgICAgICAgICAgIC50aGVuKHRoaXMuZGVsZXRlVGFza0J5SWQodGFza0lkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFzayh0YXNrSWQpeyAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoZ2V0RW5kcG9pbnRXaXRoSWQodGFza0lkKSlcclxuICAgICAgICAgICAgLnRoZW4obWVzc2FnZSA9PiAgSlNPTi5wYXJzZShtZXNzYWdlLnJlc3BvbnNlKSk7XHJcbiAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICBzYXZlVGFzayh0YXNrKXsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGVuZHBvaW50LCB0YXNrKVxyXG4gICAgICAgICAgICAudGhlbihtZXNzYWdlID0+ICBKU09OLnBhcnNlKG1lc3NhZ2UucmVzcG9uc2UpKSAgICAgICBcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB0aGlzLnB1c2hUYXNrKGRhdGEpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUYXNrKHRhc2spe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KGdldEVuZHBvaW50V2l0aElkKHRhc2suaWQpLCB0YXNrKSAgICAgIFxyXG4gICAgICAgICAgICAudGhlbihtZXNzYWdlID0+ICBKU09OLnBhcnNlKG1lc3NhZ2UucmVzcG9uc2UpKSAgICAgICAgICBcclxuICAgICAgICAgICAgLnRoZW4odGFzayA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVRhc2tCeUlkKHRhc2suaWQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2s7XHJcbiAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICAvLy50aGVuKGRhdGEgPT4gdGhpcy50YXNrcy5wdXNoKGRhdGEpKTtcclxuICAgICAgICAudGhlbihkYXRhID0+IHRoaXMucHVzaFRhc2soZGF0YSkpO1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==