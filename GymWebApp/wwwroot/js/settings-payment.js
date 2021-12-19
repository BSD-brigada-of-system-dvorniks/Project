//Modal window
const modal = document.getElementById('settings-payment-modal');
const closeBtn = document.querySelector('.settings-payment-modal-close-btn');

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
} );

var buttons = document.getElementsByClassName('card-delete-btn');

for(var i=0; i< buttons.length; i++){
    buttons[i].addEventListener('click', function() {
        modal.style.display = 'block';
    });
}

const modal2 = document.getElementById('settings-payment-modal2');
const closeBtn2 = document.getElementById('settings-payment-modal-close-btn2');
const addBtn = document.getElementById('add-card-btn');

closeBtn2.addEventListener('click', function() {
    modal2.style.display = 'none';
} );

addBtn.addEventListener('click', function() {
    modal2.style.display = 'block';
} );

// the selector will match all input controls of type :checkbox
// and attach a click event handler 
$("input:checkbox").on('click', function() {
    // in the handler, 'this' refers to the box clicked on
    var $box = $(this);
    if ($box.is(":checked")) {
      // the name of the box is retrieved using the .attr() method
      // as it is assumed and expected to be immutable
      var group = "input:checkbox[name='" + $box.attr("name") + "']";
      // the checked state of the group/box on the other hand will change
      // and the current value is retrieved using .prop() method
      $(group).prop("checked", false);
      $box.prop("checked", true);
    } else {
      $box.prop("checked", false);
    }
  });

  //Cards generator
  $(".card-panel-main").html(GenerateTrainerList());

  function GenerateTrainerList(){
    let count_of_trainers = 13;
    let trainer_list = '<div class="card-options">' +
    '<span class="card-names">XXXX XXXX XXXX XXXX</span>' +
    '<input type="checkbox" class="radio" value="1" name="fooby[1][]" />' +
    '<div class="card-delete-btn">Delete</div>' +
    '</div>';
    let trainer_list2 = '';
    for (let i = 0; i < count_of_trainers; i++) {
        trainer_list2 += trainer_list
    }
    return trainer_list2;
}

