const map = {
    "1000": "发放成功",
    "2000": "已提交发送",
    "3000": "发放中",
    "4000": "发放失败"
};

function filter(value) {
    return map[value];
}
filter.list = [];
for (var key in map)
    filter.list.push({ label: map[key], value: key });

export default filter;