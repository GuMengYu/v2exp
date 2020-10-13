import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);
dayjs.locale('zh-cn');



/** customer dayjs format */
const DEFAULT_PATTERN = 'YYYY-MM-DD HH:mm:ss';
const customerFormatPlugin = (option, dayjsClass) => {
    // extend dayjs().format()
    const oldFormat = dayjsClass.prototype.format;
    dayjsClass.prototype.format = function (formatStr = DEFAULT_PATTERN) {
        return oldFormat.call(this, formatStr);
    };
};
dayjs.extend(customerFormatPlugin);

dayjs.prototype.dateTimeConvert = datetime => dayjs(datetime).format();
dayjs.prototype.dateIgnoreSeparatorConvert = datetime => dayjs(datetime).format('YYYYMMDD');
dayjs.prototype.dateConvert = datetime => dayjs(datetime).format('YYYY-MM-DD');
dayjs.prototype.subtractDateTimeConvert = ({datetime, days}) => dayjs(datetime).subtract(days, 'day').format();

export default dayjs;