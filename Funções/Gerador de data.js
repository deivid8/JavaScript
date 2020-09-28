/* Gera data no formato 'AAAA-MM-DD HH:II:SS' */
function now() {
    var date = new Date(),
        day = date.getDate().toString(),
        dayF = (day.length == 1) ? '0' + day : day,
        month = (date.getMonth() + 1).toString(),
        monthF = (month.length == 1) ? '0' + mes : mes,
        yearF = date.getFullYear(),
        hour = date.getHours().toString(),
        hourF = (hour.length == 1) ? '0' + hour : hour,
        minute = date.getMinutes().toString(),
        minuteF = (minute.length == 1) ? '0' + minute : minute,
        second = date.getSeconds().toString(),
        secondF = (second.length == 1) ? '0' + second : second;
    return `${yearF}-${monthF}-${dayF} ${hourF}:${minuteF}:${secondF}`;
}
