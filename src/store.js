/**
 * Created by Administrator on 2017/4/18.
 */

const STORAGE_KEY="items-vuejs";

export default {
  fetch:function(){
    return JSON.parse(window.localStorage.getItem(
        STORAGE_KEY) || "[]"
    )
  },
  save:function(items){

    window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
  }
}
