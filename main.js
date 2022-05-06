function preload()
{
    glases=loadImage("https://i.postimg.cc/SKWr88VH/images-removebg-preview.png");
}



function setup()
{
    canvas = createCanvas(500,500)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    //video.center()
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotresults);
}

 function modelloaded()
 {
     console.log("model is inaitialised")
 }

 function gotresults(results)
 {
     console.log(right_eye_x);
     console.log(right_eye_y);
     right_eye_x=results[0].pose.rightEye.x
     right_eye_y=results[0].pose.rightEye.y
     console.log("righteye_x =" + results[0].pose.rightEye.x)
     console.log("righteye_y = "+ results[0].pose.rightEye.y)
 }

function draw()
{
    image(video, 0,0,500,500)
    image(glases,right_eye_x,right_eye_y,100,30)
}

function take_snapshot()
{
   save('moustahce filter.png')
}