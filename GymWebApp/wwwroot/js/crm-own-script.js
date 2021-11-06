function Calendar(id, year, month) {
    var Dlast = new Date(year, month + 1, 0).getDate(),
        D = new Date(year, month, Dlast),
        DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
        DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
        calendar = '<tr>',
        month=["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
    
    if (DNfirst != 0) {
      for(var  i = 1; i < DNfirst; i++) calendar += '<td>';
    }
    else {
      for(var  i = 0; i < 6; i++) calendar += '<td>';
    }

    for(var  i = 1; i <= Dlast; i++) {
      // if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
      //   calendar += '<td><a href="#" class="genric-btn calendar-table">' + i;
      // }
      if (i % 3==0 || i%5 ==0){
        calendar += '<td><a href="#" class="genric-btn calendar-table-training-day">' + i;
      }
      else {
        calendar += '<td><a href="#" class="genric-btn calendar-table">' + i;
      }
      if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
        calendar += '<tr>';
      }
    }
    for(var  i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
    document.querySelector('#' + id + ' tbody').innerHTML = calendar;
    document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = month[D.getMonth()] + ' ' + D.getFullYear();
    document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
    document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();
}

Calendar("calendar", new Date().getFullYear(), new Date().getMonth());
// переключатель минус месяц

document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(1)').onclick = function(){
  Calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) - 1);
}
// переключатель плюс месяц
document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(3)').onclick = function(){
  Calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) + 1);
}