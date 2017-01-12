/**
 * Created by wrb on 2017/1/12.
 */

function filter (value,fmt) {
    if(!value)
        return ""
    else
    if(fmt == "yyyy-MM")
        return value.length == 6 ? value.slice(0, 4).toString() + '-' + value.slice(4, 6).toString() : value;
    else
        return value.length == 6 ? value.slice(0, 4).toString() + '年' + value.slice(4, 6).toString() + '月' : value;
}

export default filter;