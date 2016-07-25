function turnLightOn(light) {
  console.log(light);
  var url = "/pin/" + light + "/on";  

  $.ajax({
    url: url,
    type: 'GET',
    success: function(response) {
      console.log(response)
    },
    error: function (response) {
      console.log(response)
    }
  });
}

function turnLightOff(light) {
  var url = "/pin/" + light + "/off";

  $.ajax({
    url: url,
    type: 'GET',
    success: function(response) {
      console.log(response);
    },
    error: function(response) {
      console.log(response);
    }
  });
}

function lightswitch(light, switchNum) {
  var isOff = $('#turnOnOff' + switchNum).is(':checked');

  if (isOff) {
    turnLightOn(light);
  } else {
    turnLightOff(light);
  }
}

function checkSwitchStatus(light, switchNum) {
  var url = "/pin/" + light + "/status";

  $.ajax({
    url: url,
    type: 'GET',
    success: function(response) {
      if(response == 1) {
        $('#turnOnOff' + switchNum).attr('checked', true);
      } else {
        $('#turnOnOff' + switchNum).attr('checked', false);
      }
    },
    error: function(response) {
      console.log(response);
    }
  });
}
