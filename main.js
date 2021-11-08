leftWristx=0;
leftWristy=0;
rightWrists=0;
rightWristy=0;
song = "";

function preload(){
song=loadSound("music.mp3");
}

function setup(){
canvas = createCanvas(600 , 500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses)
}

function draw(){
image(video , 0 , 0 , 600 , 500)
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function modelLoaded(){
    console.log('Model Loaded!')
}

function gotPoses(results){
    console.log(results);
    leftWristx=results[0].pose.leftWrist.x;
    leftWristy=results[0].pose.leftWrist.y;
    rightWristx=results[0].pose.rightWrist.x;
    rightWristy=results[0].pose.rightWrist.y;
    console.log("leftWristx"+leftWristx+"rightWristx"+rightWristx+"leftWristy"+leftWristy+"rightWristy"+rightWristy);
}