var Cylon = require('cylon');
/*
var net = require('net');
var io = require('socket.io').listen(1337);
*/

Cylon.robot({
  devices: {
    servo: {driver: 'servo', pin: 3, connection:'edison'}
  },

  work: function(my) {
    var agnle = 45;
    my.servo.angle(angle);
    every((1).second(), function() {
      angle = angle + 45;
      if (angle > 135) {
        angle = 45
      }
      my.servo.angle(angle);
    });
  }
})

Cylon.start();
