/*
 * @Author: mujin
 * @Date: 2021-08-11 21:52:34
 * @LastEditTime: 2021-11-04 19:51:06
 * @Description:
 */

const Constans = {
    accessList: {
        _super: 0, // 超级管理员
        _admin: 1, // 系统
        _ordinary: 198 // 普通
    },
    BASE_URL: process.env.NODE_ENV === 'development' ? '/api' : ''
};
console.log(process.env.NODE_ENV);
export default Constans;
