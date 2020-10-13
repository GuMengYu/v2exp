import {gankXhr as xhr} from './xhr';
const categoryData = type => params => xhr.get(`/data/category/${type}/type/${params.type}/page/${params.page}/count/${params.size}`);

export default {
    getBanner: () => xhr.get('/banners'),
    //获取每日推荐
    getTodayData: () => xhr.get('/today'),

    // 获取干货分类数据
    ganHuoData: categoryData('GanHuo'),

    // 获取妹子数据
    gankGirls: categoryData('Girl'),

    downLoadFile: url => {
            const tempLink = document.createElement('a');
            tempLink.style.display = 'none';
            tempLink.href = url;
            tempLink.setAttribute('download', ''); 
            document.body.appendChild(tempLink);
            tempLink.click();
            document.body.removeChild(tempLink);
    },

    // 随机Api
    randomGet: params => xhr.get(`/random/category/${params.category}/type/${params.type}/count/${params.count}`),

    /***
     * 本周热门
     * hotType: views（浏览数） | likes（点赞数） | comments（评论数）
     * category 可接受参数 Article | GanHuo | Girl
     * count: [1, 20]
     **/ 
    hot: category => xhr.get(`/hot/views/category/${category}/count/5`),
};
