"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userExports = exports.userProviders = exports.userEntities = void 0;
const entities_1 = require("./entities");
const services_1 = require("./services");
exports.userEntities = [entities_1.UserEntity, entities_1.UserGroupEntity];
exports.userProviders = [services_1.UserService];
exports.userExports = [services_1.UserService];
//# sourceMappingURL=index.js.map