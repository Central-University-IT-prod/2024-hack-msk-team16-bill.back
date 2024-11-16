"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstApiModule = void 0;
const common_1 = require("@nestjs/common");
const first_1 = require("../../../api/first");
const first_2 = require("../../../core/first");
let FirstApiModule = class FirstApiModule {
};
exports.FirstApiModule = FirstApiModule;
exports.FirstApiModule = FirstApiModule = __decorate([
    (0, common_1.Module)({
        controllers: first_1.FirstControllers,
        providers: first_1.FirstProviders,
        exports: first_2.firstExports,
        imports: first_1.firstImports,
    })
], FirstApiModule);
//# sourceMappingURL=first.api.module.js.map