"use strict";

var Cylon = require("cylon");
var servoPin = 3;
var buttonPin = 2;

Cylon.robot({
  connections: {
    edison: { adaptor: "intel-iot"}
  },

  devices: {
    servo: { driver: "servo", pin: servoPin },
    button: { driver: "button", pin: buttonPin }
  },

  work: function(my) {
    var angle = 0,
    increment = 2,
    upperLim = 160;

    every((0.01).second(), function() {
      angle += increment;

      if (((angle - 20) % upperLim === 0)) {
        angle -= increment;
      }

      my.servo.angle(angle);

      my.button.on('press', function() {
        increment = -increment;
        console.log('Flipping around!')
      });

      console.log("Current Angle: " + (my.servo.currentAngle()));
    });
  }
}).start();
