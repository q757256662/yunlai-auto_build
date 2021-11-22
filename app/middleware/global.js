"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    return async function global(ctx, next) {
        ctx.locals.locale = ctx.query.locale || 'cn';
        ctx.locals.origin = ctx.request.origin;
        await next();
    };
};
