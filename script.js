'use strict';

$(function() {

  function shuffle (array) {
    var i = 0, j = 0 , temp = null;

    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  $('form').submit(function(e) {
    e.preventDefault();
    var names = $(e.currentTarget).find('textarea').val().split('\n');
    var teams = [" Team 1"," Team 2"];    
    
    shuffle(names);
    shuffle(teams);
    // console.log(names);
    // console.log(teams);
    var pairs = [];
    for (var idx in names) {
      if (idx % 5 === 0) {
        pairs.push([names[idx]])
        // console.log(pairs);
      } else {
        pairs[pairs.length - 1].push(names[idx])
      }
    }
    $('#pairs').html('');
    var index = 0;
    for (var idx in pairs) {      
      $('#pairs').append('' + pairs[idx].join(', ') + ' =' + teams[index].toUpperCase()).append('<br><br>');
      index++;
    }
  })
});