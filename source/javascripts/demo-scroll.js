$(document).ready(function($) {
  var controller;
  controller = new ScrollMagic();

  var scene = new ScrollScene({triggerElement: "#trigger1", duration: 300})
    .setPin("#pin1")
    .addTo(controller);

  // show indicators (requires debug extension)
  scene.addIndicators();
});