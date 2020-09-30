import {gankXhr as xhr} from './xhr';
const categoryData = type => params => xhr.get(`/data/category/${type}/type/${params.type}/page/${params.page}/count/${params.size}`);

export default {
    getBanner: params => xhr.get('/banners'),
    //获取每日推荐
    getTodayData: params => xhr.get('/today'),

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
};