"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (application) => {
    const { router, controller } = application;
    router.post('/admin/api/article/list', controller.admin.list);
    router.post('/admin/api/article/add', controller.admin.add);
    router.post('/admin/api/article/del', controller.admin.del);
    router.get('/admin/api/article/:id', controller.admin.detail);
    router.get('/', controller.admin.login);
    router.get('/admin', controller.admin.home);
    router.get('/admin/*', controller.admin.home);
};
