"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiModules = void 0;
const auth_api_module_1 = require("./auth.api.module");
const bank_api_module_1 = require("./bank.api.module");
const first_api_module_1 = require("./first.api.module");
const user_api_module_1 = require("./user.api.module");
exports.apiModules = [
    first_api_module_1.FirstApiModule,
    bank_api_module_1.BankApiModule,
    user_api_module_1.UserApiModule,
    auth_api_module_1.AuthApiModule,
];
__exportStar(require("./api.module"), exports);
//# sourceMappingURL=index.js.map