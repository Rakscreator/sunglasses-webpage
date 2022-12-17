rightEyex = 0
rightEyey = 0
function preload(){
    img = loadImage("sunglasses IMG.png")
}
function setup(){
    canvas = createCanvas(640,480)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(640,480)
    video.hide()

    poseNet = ml5.poseNet(video,modelloaded)
    poseNet.on('pose',gotPoses)
}
function draw(){
    image(video,0,0,640,480)
    image(img,rightEyex-55,rightEyey-90,200,200)
}
function takeSnapshot(){
    save('pic-with-sunglasses')
}
function modelloaded(){
    console.log('posenet is activated')
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        rightEyex = results[0].pose.rightEye.x
        rightEyey = results[0].pose.rightEye.y
        console.log("right eye x = " + results[0].pose.rightEye.x)
        console.log("right eye y = " + results[0].pose.rightEye.y)
    }
}