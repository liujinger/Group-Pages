/**
 * Created by PursuitStar on 2017/3/17.
 */

var data = JSON.parse(window.localStorage.getItem("qd_data")) || {};
function dataIn(year, month, date) {

    data = JSON.parse(window.localStorage.getItem("qd_data")) || {};
    console.log(data);
   data["year_"+year] = data["year_"+year] || {};
   data["year_"+year].currentYear = year;
   data["year_"+year]["monthList"] = data["year_"+year]["monthList"] || {};
   data["year_"+year]["monthList"]["month_"+month] = data["year_"+year]["monthList"]["month_"+month] || {};
   data["year_"+year]["monthList"]["month_"+month].currentMonth = month;
    data["year_"+year]["monthList"]["month_"+month].counts = data["year_"+year]["monthList"]["month_"+month].counts || [];
   data["year_"+year]["monthList"]["month_"+month].counts.push(date);
   if(!data["year_"+year]["monthList"]["month_"+month].countNum) {
       data["year_"+year]["monthList"]["month_"+month].countNum=1;
   }else {
       data["year_"+year]["monthList"]["month_"+month].countNum++;
   }
    window.localStorage.setItem("qd_data", JSON.stringify(data));

}

function xuanRan(year, month) {
    if(data["year_"+year]) {
        var rspMonthData = data["year_"+year]["monthList"];
        if(rspMonthData["month_"+month]) {
            var rspData = rspMonthData["month_"+month].counts;
        }else {
            return 0;
        }

    }else {
        return 0;
    }

    rspData.forEach(function (value) {
        $(".today"+value).addClass("active")
    })
    return rspData.length;

}