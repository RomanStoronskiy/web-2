function date (date1, date2){
    var date1 = new Date(date1);
    var date2 = new Date(date2);
    var daysLag = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
    console.log(daysLag)
    return 0;
}

console.log(date('02-20-2020','03-20-2020'))