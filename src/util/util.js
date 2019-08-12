function getNowTimes() {
    const time = new Date();
    const now = time.getTime();
    const str = "2019/5/17 00:00:00"
    const startTime = new Date(str);
    const start = startTime.getTime();
    const longTime = now - start;
    const days = parseInt(longTime / 86400000);
    const hours = longTime % 86400000 / 3600000;
    const minutes = longTime % 86400000 % 3600000 / 60000;
    const seconds = longTime % 86400000 % 3600000 % 60000 / 1000;

    return `${parseInt(days)}天${parseInt(hours)}小时${parseInt(minutes)}分${parseInt(seconds)}秒`
}


export default {
    install: function (Vue) {
        Vue.time = Vue.prototype.$time = {
            getNowTimes
        }
    }
}