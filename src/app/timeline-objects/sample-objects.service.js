"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SampleObjectsService = (function () {
    function SampleObjectsService() {
        this.samples = [];
        this.samples.push(new SampleObject('/assets/resources/cute-cat.jpg'));
        this.samples.push(new SampleObject('/assets/resources/cute-cat-2.jpg'));
        this.samples.push(new SampleObject('/assets/resources/cute-cat-3.jpg'));
        this.samples.push(new SampleObject('/assets/resources/cute-cat-4.jpg'));
        this.samples.push(new SampleObject('/assets/resources/solar1.jpg'));
        this.samples.push(new SampleObject('/assets/resources/solar2.jpg'));
        this.samples.push(new SampleObject('/assets/resources/solar3.jpg'));
        this.samples.push(new SampleObject('/assets/resources/weather1.gif'));
        this.samples.push(new SampleObject('/assets/resources/weather2.jpg'));
        this.samples[9] = new SampleObject('/assets/resources/weather3.jpg');
        ;
        this.samples.push(new SampleObject('/assets/resources/weather4.jpg'));
    }
    SampleObjectsService.prototype.getSamples = function () {
        return this.samples;
    };
    SampleObjectsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], SampleObjectsService);
    return SampleObjectsService;
}());
exports.SampleObjectsService = SampleObjectsService;
var SampleObject = (function () {
    function SampleObject(_data) {
        this.id = SampleObject._id++;
        this.data = _data;
    }
    SampleObject._id = 0;
    return SampleObject;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlLW9iamVjdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNhbXBsZS1vYmplY3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFHM0M7SUFHRTtRQUZPLFlBQU8sR0FBVSxFQUFFLENBQUM7UUFHekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxZQUFZLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLFlBQVksQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxZQUFZLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLFlBQVksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxZQUFZLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLFlBQVksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLFlBQVksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFBO1FBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLFlBQVksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELHlDQUFVLEdBQVY7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBbkJVLG9CQUFvQjtRQURoQyxpQkFBVSxFQUFFOztPQUNBLG9CQUFvQixDQXFCaEM7SUFBRCwyQkFBQztDQUFBLEFBckJELElBcUJDO0FBckJZLG9EQUFvQjtBQXdCakM7SUFJRSxzQkFBWSxLQUFLO1FBQUksSUFBSSxDQUFDLEVBQUUsR0FBRyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUM7UUFBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUFDLENBQUM7SUFIaEUsZ0JBQUcsR0FBRyxDQUFDLENBQUM7SUFLakIsbUJBQUM7Q0FBQSxBQU5ELElBTUMifQ==