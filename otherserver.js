"use strict";

var Cylon = require("cylon");
var servoPin = 3;
var analogPin = 2;

Cylon.robot({
  connections: {
    edison: { adaptor: "intel-iot"}
  },

  devices: {
    servo: { driver: "servo", pin: servoPin },
    sensor: { driver: "analogSensor", pin: analogPin, lowerLimit: 0, upperLimit:180}
  },

  work: function(my) {
    var angle = 0;

    every((0.30).second(), function() {
      angle = my.sensor.analogRead();
      my.servo.angle(angle);
    });
  }
}).start();
