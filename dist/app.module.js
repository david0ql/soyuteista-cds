"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const carnet_module_1 = require("./carnet/carnet.module");
const schedule_module_1 = require("./schedule/schedule.module");
const qualification_module_1 = require("./qualification/qualification.module");
const typeorm_1 = require("@nestjs/typeorm");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            carnet_module_1.CarnetModule,
            schedule_module_1.ScheduleModule,
            qualification_module_1.QualificationModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'oracle',
                host: '172.16.7.197',
                port: 1535,
                username: 'APP_SOY_UTEISTA',
                password: 'vJKD!zYU!8RD',
                synchronize: true,
                'serviceName': 'ORAPROUTS'
            }),
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map