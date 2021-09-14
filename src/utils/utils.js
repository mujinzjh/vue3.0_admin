import Crypto from "crypto-js/crypto-js";
import Moment from "moment";

function utils(){}

utils.prototype = {
  /**
   * @method 处理时间日期格式
   * @param {*} value 
   * @param {*} type 
   * @returns 
   */
  setDateFormater(value,type){
    const _dateType = type || 'YYYY-MM-DD HH:mm:ss';
    return moment(value).format(_dateType);
  },
  /**
 * @method AES加密
 * @param {*} value 值
 * @param {*} key 密钥
 * @param {*} iv 
 * @return 返回base64
 */
   encrypt(value,keyStr,ivStr){
    if (value!==null) {
      const key = Crypto.enc.Utf8.parse(keyStr);
     const iv = Crypto.enc.Utf8.parse(ivStr || '0102030405060708');
      const srcs = Crypto.enc.Utf8.parse(value);
      console.log(Crypto);
      const encrypted = Crypto.AES.encrypt(srcs,key,{
        iv:iv,
        mode:Crypto.mode.CBC,
        padding:Crypto.pad.Pkcs7
      });
      return Crypto.enc.Base64.stringify(encrypted.ciphertext);
    } else {
      return value;
    }
  },
  /**
   * @method AES解密
   * @param {*} value 
   * @param {*} keyStr 
   * @param {*} ivStr 
   */
  decrypt(value,keyStr,ivStr){
    if (value!==null) {
      const key = Crypto.enc.Utf8.parse(keyStr),
      iv = Crypto.enc.Utf8.parse(ivStr || '0102030405060708'),
      base64 = Crypto.enc.Base64.parse(value),
      src = Crypto.enc.Base64.stringify(base64),
      decrypt = Crypto.AES.decrypt(src,key,{
        iv:iv,
        mode:Crypto.mode.CBC,
        padding:Crypto.padding.Pkcs7
      });
      return Crypto.enc.Utf8.stringify(decrypt).toString();
    } else {
      return value;
    }
  },
  /**
   * @method 设置加密session信息
   * @param {*} key 
   * @param {*} value 
   */
  setSessionItem(key,value){
    sessionStorage.setItem(key,this.encrypt(value,'a1b2c3d4e5f6g7h8'));
  },
  /**
   * @method 获取加密session信息
   * @param {*} key 
   * @returns 
   */
  getSessionItem(key){
    return this.decrypt(sessionStorage.getItem(key),'a1b2c3d4e5f6g7h8');
  }
}

export default new utils();