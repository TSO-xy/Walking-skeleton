document.addEventListener("keydown", keydown);
var sprite = document.querySelector("sprite");
sprite.style.top = 0;
sprite.style.left = 0;
var facing = 3 // Adjust this to your sprite-sheet
var spriteSize = 64; //Adjust this to your sprite-sheet 
var walkingFrame = 0; //Adjust this to your sprite-sheet 
var frameCount = 8; //Adjust this to your sprite-sheet
function keydown(e) {
    console.log(e.key + " pressed");
    switch (e.key) {
        case "w":
            var facing = 0;
            walkingFrame++;
            sprite.style.top = (parseInt(sprite.style.top) - 10) + "px";
            break;
        case "a":
            facing = 1;
            walkingFrame++;
            sprite.style.left = (parseInt(sprite.style.left) - 10) + "px";
            break;
        case "s":
            facing = 2;
            walkingFrame++;
            sprite.style.top = (parseInt(sprite.style.top) + 10) + "px";
            break;
        case "d":
            facing = 3;
            walkingFrame++;
            sprite.style.left = (parseInt(sprite.style.left) + 10) + "px";
            break;
    }
    sprite.style.backgroundPositionY = (0 - facing * spriteSize) + "px";
    if (walkingFrame > frameCount) {
        walkingFrame = 0;
    }
    sprite.style.backgroundPositionX = (0 - walkingFrame * spriteSize) + "px";
}
