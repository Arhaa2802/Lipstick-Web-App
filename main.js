function preload(){
    lipstick = loadImage('https://i.postimg.cc/rFLZW2X5/lipstick.png')
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotposes);
}
function modelLoaded(){
    console.log("Posenet Is Intialized");
}
function gotposes(results){
   if(results.length>0){
       console.log(results);
       console.log(" Nose X="+results[0].pose.nose.x);
       console.log(" Nose Y="+results[0].pose.nose.y);
   }
}
function draw(){
    image(video,0,0,300,300);
    image(lipstick,noseX,noseY,30,30);
}
function take_snapshot(){
    save('My_filter_image.png');
}
