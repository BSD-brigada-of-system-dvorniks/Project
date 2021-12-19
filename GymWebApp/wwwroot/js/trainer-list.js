// trainer list generator
Month=["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];


//test
test_trainers_name = ['Vlad Pichenka', 'Bodya Pichenka', 'Sirko', 'Bizonchik'];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
//end test


function GenerateTrainerList(day, month){
    let count_of_trainers = 100;
    let trainer_list = '<div class="trainer-list-choosed-day" data-month="'+ month +'" data-day="'+ day +'">' + Month[month] + ' the ' + day + '</div>';
    for (let i = 0; i < count_of_trainers; i++) {
        //let trainer_name = 'Vlad Pichenka'
        //test
        let trainer_name = test_trainers_name[getRandomInt(0, test_trainers_name.length)]
        // end test
        trainer_list += '<div class="trainer-block">'+
                        '<div class="photo">'+
                        '<img id="photo" src="img/t3.jpg" alt="">'+
                        '<span class="trainer-name">'+
                        trainer_name +
                        '</span></div>'+
                        '<div class="button-group-area trainer-list">';
        let trainer_times = ['8:30', '9:30','10:30','11:30','12:30','13:30','14:30','15:30'];
        trainer_times.forEach((element) => {
            trainer_list += '<div class="genric-btn primary time-button" '+
                            'data-toggle="modal" data-target="#modal-trainer-list" '+
                            'data-trainer-name="'+ trainer_name +'"><p>'+
                            element +'</p></div>';
        })
        trainer_list += '</div><div class="trainer-price">'+'249$'+'</div></div>';
    }
    return trainer_list;
}

function UpdateCalendarButtons(){
    $(".genric-btn.calendar-table").on('click',function(){
        if ($('.trainer-list-choosed-day').data('day') != $(this).text() && $('.trainer-list-choosed-day').data('month') == $(this).data("month")
            || $('.trainer-list-choosed-day').data('month') != $(this).data("month")){
            $("#trainer-list").html(GenerateTrainerList($(this).text(), $(this).data("month")));
            $("#trainer-list").animate({scrollTop:0}, 500);
            UpdateTimeButtons();
        }
    });
}

// current day
$("#trainer-list").html(GenerateTrainerList(new Date().getDate(), new Date().getMonth()));
UpdateCalendarButtons();

// end of training list generator


//training time modal change
let text1 = 'Do you want to sign up for a training session to ';

function UpdateTimeButtons(){
    $('.time-button').on('click', function() {
        $('.trainer-list-notice').text(text1 + $(this).data('trainer-name')+' on '+ 
                                    $(this).text()+' the '+ $('.trainer-list-choosed-day').data('day') +' of '+
                                    Month[$('.trainer-list-choosed-day').data('month')]);
    });
}

UpdateTimeButtons();
//buttons update
$('#calendar thead tr:nth-child(1) td:nth-child(1)').on('click', function(){ 
    UpdateCalendarButtons();
    UpdateTimeButtons();
});

$('#calendar thead tr:nth-child(1) td:nth-child(3)').on('click', function(){ 
    UpdateCalendarButtons();
    UpdateTimeButtons();
});
// end buttons update