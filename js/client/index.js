var target = document.querySelector("#target");
aalib.read.video.fromVideoElement(target)
    .map(aalib.aa({width:50, height:30, colored:true}))
    .map(aalib.render.html({
      el:document.querySelector("#render"),
      fontSize: 20
    }))
    .subscribe();