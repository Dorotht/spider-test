const request = require('request');

const cheerio = require('cheerio');

const saveContent = require('./component/saveContent');

const downloadImg = require('./component/downloadImg');

const param = {
    url: 'http://www.27270.com/ent/meinvtupian/',  //目标链接

    imgs: [],
}

request(param.url, function (error, response, body) {

    console.log('body:', body);


    // cheerio需要先load html
    let $ = cheerio.load(body);

    console.log('成功')
    //抓取需要的数据,each为cheerio提供的方法用来遍历

    $('.MeinvTuPianBox li').each((index, element) => {

        param.imgs.push($(element).find('img').attr('src'));

    });

    //     //存放数据
    //     saveContent('./content/content.txt', content);

    //文件下载
    downloadImg('imgs', param.imgs);

});
