var target = document.querySelector("#target");
aalib.read.video.fromVideoElement(target)
    .map(aalib.aa({width:530, height:160, colored:true}))
    .map(aalib.render.html({
      fontSize: 7
    }))
    .subscribe();