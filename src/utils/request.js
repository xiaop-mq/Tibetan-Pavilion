// es6  promise 微信小程序的api的铺垫 

// 函数导出
export default (params)=>{

  // 加载中
  uni.showLoading({
    title:"加载中"
  })
  
  // 返回函数
  return new Promise((resolve,reject)=>{

    wx.request({
      ...params,
      success(res){
        resolve(res.data);
      },
      fail(err){
        reject(err);
      },
      // 成功失败都会触发该请求
      complete(){
        uni.hideLoading();
      }
    })

  })
}