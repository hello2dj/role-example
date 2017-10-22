# role-epe [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> role-test

# [rbac](https://github.com/seeden/rbac) 整体有Role(角色), Permission(权限), Grant((授予角色XX权限)) 三个概念,可惜的是没有文档，但使用起来还是可以的
* role 即角色， 存储着grants:eg.update_article, 即授予更新文章的权限(permission)，也可以存储其他角色如grants{ a: [b, update\_article]})，即意味着，把b的权限也授予给a,同时授予a update article的权限
* permission 即权限，很简单就是 (resource, action)的二元组
* grant 授予权限集合map的形式 eg: { a: [b, update\_article], b: [ create_article ]}, 很容易看出来
* 而且rabc 也支持mongoose adapter
* 具体还有其他的api,可以查看[rbac.js](https://github.com/seeden/rbac/blob/master/src/RBAC.js)


[npm-image]: https://badge.fury.io/js/role-epe.svg
[npm-url]: https://npmjs.org/package/role-epe
[travis-image]: https://travis-ci.org/sensoroDj/role-epe.svg?branch=master
[travis-url]: https://travis-ci.org/sensoroDj/role-epe
[daviddm-image]: https://david-dm.org/sensoroDj/role-epe.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/sensoroDj/role-epe
[coveralls-image]: https://coveralls.io/repos/sensoroDj/role-epe/badge.svg
[coveralls-url]: https://coveralls.io/r/sensoroDj/role-epe
