"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModules = void 0;
const api_1 = require("./api");
const core_module_1 = require("./core/core.module");
const infra_1 = require("./infra");
exports.AppModules = [api_1.ApiModule, core_module_1.CoreModule, ...infra_1.infraModules];
//# sourceMappingURL=index.js.map