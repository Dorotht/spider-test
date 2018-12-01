const fs = require('fs');

const request = require('request');

//下载爬到的图片
function downloadImg(file, imgs) {

    imgs.forEach((imgUrl, index) => {

        //获取图片名 
        let imgName = imgUrl.split('/').pop();

        //下载图片存放到指定目录
        let stream = fs.createWriteStream(`./${file}/${imgName}`);

        let req = request.get(imgUrl); //响应流

        req.pipe(stream);

        console.log(`开始下载图片 ${imgUrl} --> ./imgs/${imgName}`);

        
    })

}
module.exports = downloadImg;