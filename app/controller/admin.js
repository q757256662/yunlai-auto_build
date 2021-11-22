"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
const json_typescript_mapper_1 = require("@hubcarl/json-typescript-mapper");
const article_1 = require("../model/article");
const condition_1 = require("../lib/condition");
class AdminController extends egg_1.Controller {
    async login(ctx) {
        await ctx.render('admin/login.js', {});
    }
    async home(ctx) {
        if (ctx.query.mode === 'csr') {
            await ctx.renderClient('admin/home.js', { url: ctx.url.replace(/\/admin/, '') }, { viewEngine: null });
        }
        else {
            await ctx.render('admin/home.js', { url: ctx.url.replace(/\/admin/, '') });
        }
    }
    async list(ctx) {
        const condition = json_typescript_mapper_1.deserialize(condition_1.default, ctx.request.body);
        ctx.body = await ctx.service.article.getArtilceList(condition);
    }
    async add(ctx) {
        const article = json_typescript_mapper_1.deserialize(article_1.default, ctx.request.body);
        ctx.body = await ctx.service.article.saveArticle(article);
    }
    async del(ctx) {
        const { id } = ctx.request.body;
        ctx.body = await ctx.service.article.deleteArticle(id);
    }
    async detail(ctx) {
        const { id } = ctx.params;
        ctx.body = await ctx.service.article.query({ id: Number(id) });
    }
}
exports.default = AdminController;
