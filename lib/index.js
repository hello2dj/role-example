// Const rbac = require('rbac');
// RBAC使用的是es6的默认导入so
const Bluebird = require('bluebird');
const RBAC = require('rbac').default;

const rbacImp = new Bluebird((resolve, reject) => {
  return new RBAC(
    {
      roles: ['superadmin', 'admin', 'user', 'guest'],
      permissions: {
        user: ['create', 'delete'],
        password: ['change', 'forgot'],
        article: ['create'],
        rbac: ['update']
      },
      grants: {
        guest: ['create_user', 'forgot_password'],
        user: ['change_password'],
        admin: ['user', 'delete_user', 'update_rbac'],
        superadmin: ['admin']
      }
    },
    (err, rbacIml) => {
      if (err) {
        reject(err);
      } else {
        resolve(rbacIml);
      }
    }
  );
});

rbacImp
  .then(rbacImp => {
    return new Bluebird((resolve, reject) => {
      rbacImp.can('admin', 'update', 'rbac', (err, can) => {
        if (err) {
          reject(err);
        }

        if (can) {
          console.log('Admin is able update rbac');
        } else {
          console.log('Admin can not update rbac');
        }
        resolve(rbacImp);
      });
    });
  })
  .then(rbacImp => {
    return new Bluebird((resolve, reject) => {
      rbacImp.can('admin', 'create', 'article', (err, can) => {
        if (err) {
          reject(err);
        }

        if (can) {
          console.log('Admin is able create article');
        } else {
          console.log('Admin can not create articale');
        }
      });
    });
  });
