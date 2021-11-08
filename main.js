noseX=0;
noseY=0;
function preload() {
    nose_clown=loadImage('https://i.postimg.cc/tgmHLd7y/Png-Item-850778.png');

}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    console.log("hi its working")
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function modelLoaded() {
    console.log('posenet is initialized')
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);

    }
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(nose_clown,noseX,noseY,30,30);
}
function take_snapshot() {
    save('kavish.png');
}


