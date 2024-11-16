"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerMiddleware = void 0;
const common_1 = require("@nestjs/common");
class LoggerMiddleware {
    constructor() {
        this.logger = console;
    }
    use(request, response, next) {
        const { method, body, originalUrl } = request;
        const now = Date.now();
        response.on('close', () => {
            const { statusCode } = response;
            const message = `${method} ${originalUrl} ${statusCode} ${Date.now() - now}ms - ${JSON.stringify(body)} `;
            if (statusCode >= common_1.HttpStatus.INTERNAL_SERVER_ERROR) {
                this.logger.error(message);
            }
            else {
                this.logger.log(message);
            }
        });
        next();
    }
}
exports.LoggerMiddleware = LoggerMiddleware;
//# sourceMappingURL=logger.middleware.js.map