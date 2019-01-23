var canvas = document.getElementById("canvas");
var canvasOriginal = document.getElementById("original");
var imageOriginal = new MarvinImage();
var imageProcessed = new MarvinImage();
var imageDisplay = new MarvinImage();

document.getElementById('picField').onchange = function (evt) {
    var tgt = evt.target || window.event.srcElement,
        files = tgt.files;

    // FileReader support
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
			imageOriginal.load(fr.result, imageLoaded);
        }
        fr.readAsDataURL(files[0]);
    }

    // Not supported
    else {
        // fallback -- perhaps submit the input to an iframe and temporarily store
        // them on the server until the user's session ends.
    }
}
function imageLoaded(){
	imageProcessed = imageOriginal.clone();
	canvasOriginal.width = imageOriginal.getWidth();
    canvasOriginal.height = imageOriginal.getHeight();
	canvasOriginal.getContext("2d").fillStyle = "#eeeeee";
	canvasOriginal.getContext("2d").fillRect(0,0,canvasOriginal.width, canvasOriginal.height);
  imageOriginal.draw(canvasOriginal);
	canvas.width = imageOriginal.getWidth();
    canvas.height = imageOriginal.getHeight();
	canvas.getContext("2d").fillStyle = "#eeeeee";
	canvas.getContext("2d").fillRect(0,0,canvasOriginal.width, canvasOriginal.height);
	repaint();
}

function repaint(){
	canvas.getContext("2d").fillStyle = "#eeeeee";
	canvas.getContext("2d").fillRect(0,0,canvasOriginal.width, canvasOriginal.height);

		imageProcessed.draw(canvas);
	imageProcessed.update();
}
	

function clickRemoveBorder(){
	buildHisto();
  for(var y=0; y<imageOriginal.getHeight(); y++){
    for(var x=0; x<imageOriginal.getWidth(); x++){
      var red = imageOriginal.getIntComponent0(x,y);
      var green = imageOriginal.getIntComponent1(x,y);
      var blue = imageOriginal.getIntComponent2(x,y);
      var alpha = imageOriginal.getAlphaComponent(x,y);
      
      if(red <= 14 && green <= 0 && blue <=0 && alpha > 0){
        imageProcessed.setIntColor(x, y, 0, 0,0,0);
      }
    }
  }
  repaint();
  return imageProcessed.clone();
}
function evalEnvironment(img,x,y){
	return img.getAlphaComponent(x-1,y-1)+img.getAlphaComponent(x-1,y)+img.getAlphaComponent(x-1,y+1)+img.getAlphaComponent(x,y-1)+img.getAlphaComponent(x,y+1)+img.getAlphaComponent(x+1,y-1)+img.getAlphaComponent(x+1,y)+img.getAlphaComponent(x+1,y+1)+img.getAlphaComponent(x-2,y)+img.getAlphaComponent(x+2,y)+img.getAlphaComponent(x,y-2)+img.getAlphaComponent(x,y+2);
}

function clickDrawBorder(){
	var imageTemp = clickRemoveBorder();
  for(var y=0; y<imageTemp.getHeight(); y++){
    for(var x=0; x<imageTemp.getWidth(); x++){
      var red = imageTemp.getIntComponent0(x,y);
      var green = imageTemp.getIntComponent1(x,y);
      var blue = imageTemp.getIntComponent2(x,y);
      var alpha = imageTemp.getAlphaComponent(x,y);

	  if(evalEnvironment(imageTemp,x,y)>0 && alpha==0){
        imageProcessed.setIntColor(x, y, 255, 255,0,0);
	  }
    }
  }
  repaint();
}
function buildHisto(){
var hist=[];
  for(var y=0; y<imageOriginal.getHeight(); y++){
    for(var x=0; x<imageOriginal.getWidth(); x++){
		var all = imageOriginal.getIntColor(x,y);
      var red = imageOriginal.getIntComponent0(x,y);
      var green = imageOriginal.getIntComponent1(x,y);
      var blue = imageOriginal.getIntComponent2(x,y);
      var alpha = imageOriginal.getAlphaComponent(x,y);
		
	  if(!Array.isArray(hist[String(all)])){
		  hist.append([red,green,blue,alpha,1]); 
	  }else{
		  hist[String(all)][4]++;
	  }
    }
  }
  for (i=0; i < hist.length; i++) { console.log(hist[i]); 
}
  repaint();
}