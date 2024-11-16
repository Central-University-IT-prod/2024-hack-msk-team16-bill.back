"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstImports = exports.FirstProviders = exports.FirstControllers = void 0;
const first_core_module_1 = require("../../infra/loCC/core/first.core.module");
const controllers_1 = require("./controllers");
const use_cases_1 = require("./use-cases");
exports.FirstControllers = [controllers_1.FirstHttpController];
exports.FirstProviders = [use_cases_1.FirstUseCase];
exports.firstImports = [first_core_module_1.FirstCoreModule];
//# sourceMappingURL=index.js.map