/**
 * @method 权限判断
 * @param {*} name  跳转路由
 * @param {*} access 权限，
 * @param {*} routerArray 路由列表
 */
function isAccess(name, access, routerArray) {
    var routerPermissionJudge = (list) => {
        return list.some(item => {
            if (item.children && item.children.length) {
                return routerPermissionJudge(item.children);
            } else if (name === item.name) {
                return hasAccess(access, item);
            }
        });
    }
    return routerPermissionJudge(routerArray);
}

function isAccessTo(name, routerArray) {
    var routerPermissionJudge = (list) => {
        return list.some(item => {
            if (item.children && item.children.length) {
                return routerPermissionJudge(item.children);
            } else if (name === item.name) {
                return true;
            }
        });
    }
    return routerPermissionJudge(routerArray);
}


/**
 * @method 是否拥有权限
 * @param {*} access 
 * @param {*} item 
 * @returns 
 */
function hasAccess(access, item) {
    if (item.meta && item.meta.access) {
        return isCludesAccess(access, item.meta.access);
    }
    return true;
}

/**
 * @method 判断权限数组中是否存在当前权限
 * @param {*} access 
 * @param {*} routeAccess 
 * @returns 
 */
function isCludesAccess(access, routeAccess) {
    return routeAccess.includes(access);
}

export default {
    isAccess,isAccessTo
}