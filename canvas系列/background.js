function loadBackground(bgURL, bgcanvas, callback) {

    var ctx = bgcanvas.getContext('2d')
    var width = bgcanvas.width
    var height = bgcanvas.height

    var image = new Image()
    image.src = bgURL
    image.onload = function () {
        //画两张背景图（为循环）
        ctx.drawImage(this, 0, 0, width, height)
        ctx.drawImage(this, 0, -height, width, height)
        if (callback) {
            callback(image)
        }
    }

}

var offsetbg = 0
function animationBackground(bgcanvas, image, speed) {
    var ctx = bgcanvas.getContext('2d')
    var width = bgcanvas.width
    var height = bgcanvas.height
 
    //清除画布
    ctx.clearRect(0, 0, bgcanvas.width, bgcanvas.height)
    //存储状态
    ctx.save()
    //更新位置
    offsetbg += speed
    if (offsetbg >= height) {
        offsetbg = 0
    }
    ctx.translate(0, offsetbg)
    //绘制图片
    ctx.drawImage(image, 0, 0, width, height)
    ctx.drawImage(image, 0, -height, width, height)
    //获取存储状态
    ctx.restore()
}

