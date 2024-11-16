"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = exports.RolesSetMetadata = void 0;
const common_1 = require("@nestjs/common");
const guards_1 = require("../guards");
const RolesSetMetadata = (...roles) => (0, common_1.SetMetadata)('roles', roles);
exports.RolesSetMetadata = RolesSetMetadata;
const Roles = (...roles) => (0, common_1.applyDecorators)((0, common_1.UseGuards)(guards_1.JwtGuard), (0, exports.RolesSetMetadata)(...roles), (0, common_1.UseGuards)(guards_1.RolesGuard));
exports.Roles = Roles;
//# sourceMappingURL=roles.decorator.js.map