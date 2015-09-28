System.register(['aurelia-framework'], function (_export) {
    'use strict';

    var computedFrom, Task;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            computedFrom = _aureliaFramework.computedFrom;
        }],
        execute: function () {
            Task = function Task(id, description, complete) {
                _classCallCheck(this, Task);

                this.id = id;
                this.description = description;
                this.complete = complete;
            };

            _export('Task', Task);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3NCQUVhLElBQUk7Ozs7Ozs2Q0FGVCxZQUFZOzs7QUFFUCxnQkFBSSxHQUVGLFNBRkYsSUFBSSxDQUVELEVBQUUsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFDO3NDQUY3QixJQUFJOztBQUdULG9CQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNiLG9CQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztBQUMvQixvQkFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7YUFDNUIiLCJmaWxlIjoidGFzay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29tcHV0ZWRGcm9tfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5leHBvcnQgY2xhc3MgVGFza3tcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZGVzY3JpcHRpb24sIGNvbXBsZXRlKXtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==