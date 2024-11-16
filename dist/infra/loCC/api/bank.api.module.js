"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankApiModule = void 0;
const common_1 = require("@nestjs/common");
const bank_1 = require("../../../api/bank");
const bank_2 = require("../../../core/bank");
let BankApiModule = class BankApiModule {
};
exports.BankApiModule = BankApiModule;
exports.BankApiModule = BankApiModule = __decorate([
    (0, common_1.Module)({
        controllers: bank_1.bankControllers,
        providers: bank_1.bankProviders,
        exports: bank_2.bankExports,
        imports: bank_1.bankImports,
    })
], BankApiModule);
//# sourceMappingURL=bank.api.module.js.map