import {gankXhr as xhr} from './xhr';
export default {
    getBanner: params => xhr.get('/banners'),
    //获取每日推荐
    getTodayData: params => xhr.get('/today'),

    // 获取干货分类数据
    getTypeData: params => xhr.get(`/data/category/GanHuo/type/${params.type}/page/${params.page}/count/${params.size}`),

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
