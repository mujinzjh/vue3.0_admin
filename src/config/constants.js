/*
 * @Author: mujin
 * @Date: 2021-08-11 21:52:34
 * @LastEditTime: 2021-11-16 11:13:52
 * @Description:
 */
import moment from 'moment';
const Constants = {
    accessList: {
        _super: 0, // 超级管理员
        _admin: 1, // 系统
        _ordinary: 198 // 普通
    },
    BASE_URL: process.env.NODE_ENV === 'development' ? '/api' : '',
    setFormatterText: function (value, type) {
        if (!type) {
            return moment(value).format('YYYY-MM-DD HH:mm:ss');
        } else {
            return moment(value).format(type);
        }
    },
    pageSizeOpt: [10, 20, 50, 100]
};
export default Constants;
