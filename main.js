let video;
let poseNet;
let poses = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet model loaded');
}

function gotPoses(poses) {
  if (poses.length > 0) {
    console.log(poses);
  }
}

function draw() {
  image(video, 0, 0);
}