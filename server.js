var Cylon = require('cylon');
/*
var net = require('net');
var io = require('socket.io').listen(1337);
*/

Cylon
  .robot()
  .connection('edison', { adaptor: 'intel-iot' })
  .device('servo', { driver: 'servo', pin: 3, connection: 'edison' })
  .on('ready', function(my) {
    var angle = 0;
    my.servo.angle(angle);
    setInterval(function(){
      angle = 180;
      my.servo.angle(angle);
      console.log('Servo Angle: %d', angle);
      angle = 0;
      my.servo.angle(angle);
    },100);
  });

Cylon.start();
