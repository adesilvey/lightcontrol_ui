function turnLightOn(light) {
  console.log(light);
  var url = "/light/" + light + "/on";  

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
  var url = "/light/" + light + "/off";

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
