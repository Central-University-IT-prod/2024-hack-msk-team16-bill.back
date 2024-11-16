"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
const common_1 = require("@nestjs/common");
const app_1 = require("../enums/app");
const swagger_1 = require("@nestjs/swagger");
const user_1 = require("../enums/user");
const decorators_1 = require("../../api/auth/decorators");
const Route = (options) => {
    const { description, method, title: summary, code, path, roles } = options;
    const methodDict = {
        [app_1.HttpMethodEnum.GET]: common_1.Get,
        [app_1.HttpMethodEnum.POST]: common_1.Post,
        [app_1.HttpMethodEnum.PUT]: common_1.Put,
        [app_1.HttpMethodEnum.PATCH]: common_1.Patch,
        [app_1.HttpMethodEnum.DELETE]: common_1.Delete,
    };
    const apiOperationsPayload = {
        description,
        summary,
    };
    const decorators = [
        methodDict[method](path),
        (0, swagger_1.ApiOperation)(apiOperationsPayload),
    ];
    if (code) {
        decorators.push((0, common_1.HttpCode)(code));
    }
    if (roles) {
        const avaibleRoles = roles.length === 0 ? Object.values(user_1.RoleEnum) : roles;
        decorators.push((0, decorators_1.Roles)(...roles), (0, swagger_1.ApiBearerAuth)(`AccessToken`), (0, swagger_1.ApiOperation)({
            ...apiOperationsPayload,
            description: apiOperationsPayload.description +
                ` (Method is accessible to roles: ${avaibleRoles.join(', ')})`,
        }));
    }
    return (0, common_1.applyDecorators)(...decorators);
};
exports.Route = Route;
//# sourceMappingURL=route.decorator.js.map