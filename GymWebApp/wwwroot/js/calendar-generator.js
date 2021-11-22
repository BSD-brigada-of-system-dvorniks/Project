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
        calendar += '<td><div class="genric-btn calendar-table-training-day" data-toggle="modal" data-target="#modal-training-day"><p>' + i;
      }
      else {
        calendar += '<td><div class="genric-btn calendar-table" data-month="'+D.getMonth()+'"><p>' + i;
      }
      if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
        calendar += '<tr>';
      }
    }
    for(var  i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';

	$('#'+id+' tbody').html(calendar);
	$('#'+id+' thead tr:nth-child(1) td:nth-child(2)').html(month[D.getMonth()] + ' ' + D.getFullYear());
	$('#'+id+' thead tr:nth-child(1) td:nth-child(2)').attr('data-month', D.getMonth());
	$('#'+id+' thead tr:nth-child(1) td:nth-child(2)').attr('data-year', D.getFullYear());
}

Calendar("calendar", new Date().getFullYear(), new Date().getMonth());

// переключатель минус месяц
$('#calendar thead tr:nth-child(1) td:nth-child(1)').on('click', function(){
	Calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) - 1);
	// Calendar("calendar", $('#calendar thead tr:nth-child(1) td:nth-child(2)').data('year'), parseFloat($('#calendar thead tr:nth-child(1) td:nth-child(2)').data('month')) - 1);
});

// переключатель плюс месяц
$('#calendar thead tr:nth-child(1) td:nth-child(3)').on('click', function(){
	Calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) + 1);
	// Calendar("calendar", $('#calendar thead tr:nth-child(1) td:nth-child(2)').data('year'), parseFloat($('#calendar thead tr:nth-child(1) td:nth-child(2)').data('month')) + 1);
});
