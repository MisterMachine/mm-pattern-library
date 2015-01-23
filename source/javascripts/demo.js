$(document).ready(function($) {
var sceneOptions = {duration: 200, offset: -100};
var elements = $("#tweens h3");
var fade = [];
  fade.controller = new ScrollMagic();

  // fade
  new ScrollScene(sceneOptions)
    .addTo(fade.controller)
    .triggerHook("onCenter")
    .triggerElement(elements[0])
    .setTween(TweenMax.from(elements[0], 1, {autoAlpha: 0}));
  
  // move
  new ScrollScene(sceneOptions)
    .addTo(fade.controller)
    .triggerHook("onCenter")
    .triggerElement(elements[1])
    .setTween(TweenMax.from(elements[1], 1, {left: "-50%", marginLeft: -200, ease: Back.easeOut}));
  
  // spin
  new ScrollScene(sceneOptions)
    .offset(200)
    .addTo(fade.controller)
    .triggerHook("onCenter")
    .triggerElement(elements[1]) // use previous element as trigger, as top position changes during spin
    .setTween(TweenMax.to(elements[2], 1, {rotation: 360}));
  
  // scale
  new ScrollScene(sceneOptions)
    .addTo(fade.controller)
    .triggerHook("onCenter")
    .triggerElement(elements[3])
    .setTween(TweenMax.from(elements[3], 1, {scale: 0, ease: Back.easeOut}));
  
});

$(document).ready(function($) {
  // draw ani
  var drawAni = new TimelineMax({delay: 0.2});
  
  var distancePerSecond = 500;
  $("svg#draw path").each(function () {
    var lineLength = $(this)[0].getTotalLength();
    $(this).css("stroke-dasharray", lineLength);
    $(this).css("stroke-dashoffset", lineLength);
    drawAni.add(TweenMax.to(this, lineLength / distancePerSecond, {strokeDashoffset: 0}));
  });
  
  var base = [];
  base.controller = new ScrollMagic();

  // ani
  var pinani = new TimelineMax()
    // pin move down
    .add(TweenMax.from("#pin>h3:first-child", 0.5, {top: "0%", marginTop: 0}))
    
    // draw
    .add([
      drawAni,
      TweenMax.to("#pin>h3:first-child", 0.3, {autoAlpha: 0})
    ])
    
    // wipe
    .add(TweenMax.to("#wipe", 1, {width: "100%", delay: 0.2}))
    
    // slide
    .add(TweenMax.to("#slide", 1, {top: "0%", ease: Bounce.easeOut, delay: 0.2}))
    
    // color
    .add([
      TweenMax.to("#slide h3:first-child", 0.2, {autoAlpha: 0}),
      TweenMax.from("#slide h3:last-child", 0.2, {autoAlpha: 0})
    ])
    .add([
      TweenMax.to("#slide", 0.3, {backgroundColor: "yellow"}),
      TweenMax.to("#slide h3:last-child", 0.3, {color: "blue"})
    ])
    .add([
      TweenMax.to("#slide", 0.3, {backgroundColor: "green"}),
      TweenMax.to("#slide h3:last-child", 0.3, {color: "red"})
    ])
    .add([
      TweenMax.to("#slide", 0.3, {backgroundColor: "red"}),
      TweenMax.to("#slide h3:last-child", 0.3, {color: "white"})
    ])
    .add([
      TweenMax.to("#slide", 0.3, {backgroundColor: "#c7e1ff"}),
      TweenMax.to("#slide h3:last-child", 0.3, {color: "black"})
    ])
    
    // unpin
    .add(TweenMax.from("#unpin", .5, {top: "100%"}));
  
    // pin
    new ScrollScene({
      triggerElement: "#pin",
      offset: 400,
      duration: 1700
    })
    
    .on("progress", function () {
    // keep centered even though width changes
      $("#wipe h3").width($("#pin>h3").width());
    })
    
    .setPin("#pin")
    .setTween(pinani)
    .addTo(base.controller);
});

$(document).ready(function($) {
  var lax = [];
  lax.controller = new ScrollMagic();

  // parallax
  new ScrollScene({
    triggerElement: "#parallax",
    duration: $(window).height() + 300,
    offset: -150
  })

  .addTo(lax.controller)
  .triggerHook("onCenter")
  .setTween(new TimelineMax().add([
    TweenMax.fromTo("#parallax #big", 1, {scale: 2, alpha: 0.1, top: "100%"}, {top: "0%", ease: Linear.easeNone}),
    TweenMax.to("#parallax #parallaxbg", 1, {backgroundPosition: "0 -260%", ease: Linear.easeNone})
  ]));
});  
