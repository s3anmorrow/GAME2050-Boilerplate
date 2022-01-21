// createjs typescript definition for TypeScript
/// <reference path="./../node_modules/@types/createjs/index.d.ts" />

// importing createjs framework
import "createjs";
// importing game constants
<<<<<<< HEAD
import { STAGE_WIDTH, STAGE_HEIGHT, FRAME_RATE } from "./Constants";
=======
import { STAGE_WIDTH, STAGE_HEIGHT } from "./Constants";
>>>>>>> 95dcef33d1ce31560eb883e6cd1df3dddd5ae1c0

// game variables
let stage:createjs.StageGL;
let canvas:HTMLCanvasElement;

<<<<<<< HEAD
// spritesheet object
let spriteSheet:createjs.SpriteSheet;
// spritesheet data object
let data:object = {

    "images": [
        "lib/spritesheets/sprites.png"
    ],
    
    "framerate": 30,
    "frames": [
        [1, 1, 15, 16, 0, -13, -14],
        [1, 1, 15, 16, 0, -13, -14],
        [18, 1, 20, 22, 0, -10, -11],
        [18, 1, 20, 22, 0, -10, -11],
        [40, 1, 22, 31, 0, 10, 15],
        [40, 1, 22, 31, 0, 10, 15],
        [40, 1, 22, 31, 0, 10, 15],
        [40, 1, 22, 31, 0, 10, 15],
        [40, 1, 22, 31, 0, 10, 15],
        [40, 1, 22, 31, 0, 10, 15],
        [40, 1, 22, 31, 0, 10, 15],
        [40, 1, 22, 31, 0, 10, 15],
        [64, 1, 27, 26, 0, -9, -10],
        [64, 1, 27, 26, 0, -9, -10],
        [93, 1, 24, 31, 0, 11, 15],
        [93, 1, 24, 31, 0, 11, 15],
        [93, 1, 24, 31, 0, 11, 15],
        [93, 1, 24, 31, 0, 11, 15],
        [93, 1, 24, 31, 0, 11, 15],
        [93, 1, 24, 31, 0, 11, 15],
        [93, 1, 24, 31, 0, 11, 15],
        [93, 1, 24, 31, 0, 11, 15],
        [93, 1, 24, 31, 0, 11, 15],
        [119, 1, 26, 30, 0, 11, 15],
        [119, 1, 26, 30, 0, 11, 15],
        [119, 1, 26, 30, 0, 11, 15],
        [119, 1, 26, 30, 0, 11, 15],
        [119, 1, 26, 30, 0, 11, 15],
        [119, 1, 26, 30, 0, 11, 15],
        [119, 1, 26, 30, 0, 11, 15],
        [119, 1, 26, 30, 0, 11, 15],
        [119, 1, 26, 30, 0, 11, 15],
        [147, 1, 23, 36, 0, 11, 18],
        [147, 1, 23, 36, 0, 11, 18],
        [147, 1, 23, 36, 0, 11, 18],
        [172, 1, 23, 36, 0, 11, 18],
        [172, 1, 23, 36, 0, 11, 18],
        [172, 1, 23, 36, 0, 11, 18],
        [197, 1, 24, 36, 0, 12, 18],
        [197, 1, 24, 36, 0, 12, 18],
        [197, 1, 24, 36, 0, 12, 18],
        [223, 1, 26, 36, 0, 13, 18],
        [223, 1, 26, 36, 0, 13, 18],
        [223, 1, 26, 36, 0, 13, 18],
        [1, 39, 27, 36, 0, 13, 18],
        [1, 39, 27, 36, 0, 13, 18],
        [1, 39, 27, 36, 0, 13, 18],
        [30, 39, 30, 36, 0, 15, 18],
        [30, 39, 30, 36, 0, 15, 18],
        [30, 39, 30, 36, 0, 15, 18],
        [62, 39, 33, 34, 0, -5, -5],
        [62, 39, 33, 34, 0, -5, -5],
        [97, 39, 32, 36, 0, -4, -6],
        [97, 39, 32, 36, 0, -4, -6],
        [131, 39, 33, 36, 0, 16, 18],
        [131, 39, 33, 36, 0, 16, 18],
        [131, 39, 33, 36, 0, 16, 18],
        [131, 39, 33, 36, 0, 16, 18],
        [131, 39, 33, 36, 0, 16, 18],
        [131, 39, 33, 36, 0, 16, 18],
        [131, 39, 33, 36, 0, 16, 18],
        [131, 39, 33, 36, 0, 16, 18],
        [131, 39, 33, 36, 0, 16, 18],
        [131, 39, 33, 36, 0, 16, 18],
        [131, 39, 33, 36, 0, 16, 18],
        [131, 39, 33, 36, 0, 16, 18],
        [166, 39, 33, 36, 0, 16, 18],
        [166, 39, 33, 36, 0, 16, 18],
        [166, 39, 33, 36, 0, 16, 18],
        [201, 39, 33, 36, 0, 16, 18],
        [201, 39, 33, 36, 0, 16, 18],
        [201, 39, 33, 36, 0, 16, 18],
        [1, 77, 33, 36, 0, 16, 18],
        [1, 77, 33, 36, 0, 16, 18],
        [1, 77, 33, 36, 0, 16, 18],
        [36, 77, 33, 36, 0, 16, 18],
        [36, 77, 33, 36, 0, 16, 18],
        [36, 77, 33, 36, 0, 16, 18],
        [71, 77, 26, 43, 0, -8, 0],
        [71, 77, 26, 43, 0, -8, 0],
        [99, 77, 30, 43, 0, -4, 0],
        [99, 77, 30, 43, 0, -4, 0],
        [131, 77, 34, 43, 0, -4, 0],
        [131, 77, 34, 43, 0, -4, 0],
        [167, 77, 34, 43, 0, -4, 0],
        [167, 77, 34, 43, 0, -4, 0],
        [203, 77, 26, 57, 0, -8, 0],
        [203, 77, 26, 57, 0, -8, 0],
        [203, 77, 26, 57, 0, -8, 0],
        [1, 136, 26, 59, 0, -8, 0],
        [1, 136, 26, 59, 0, -8, 0],
        [1, 136, 26, 59, 0, -8, 0],
        [29, 136, 26, 59, 0, -8, 0],
        [29, 136, 26, 59, 0, -8, 0],
        [29, 136, 26, 59, 0, -8, 0],
        [57, 136, 26, 59, 0, -8, 0],
        [57, 136, 26, 59, 0, -8, 0],
        [57, 136, 26, 59, 0, -8, 0],
        [85, 136, 41, 45, 0, 0, -1],
        [85, 136, 41, 45, 0, 0, -1],
        [128, 136, 34, 55, 0, -4, 0],
        [128, 136, 34, 55, 0, -4, 0],
        [128, 136, 34, 55, 0, -4, 0],
        [128, 136, 34, 55, 0, -4, 0],
        [128, 136, 34, 55, 0, -4, 0],
        [128, 136, 34, 55, 0, -4, 0],
        [164, 136, 34, 59, 0, -4, 0],
        [164, 136, 34, 59, 0, -4, 0],
        [164, 136, 34, 59, 0, -4, 0],
        [200, 136, 34, 60, 0, -4, 0],
        [200, 136, 34, 60, 0, -4, 0],
        [200, 136, 34, 60, 0, -4, 0]
    ],
    
    "animations": {
        "plane/dead": { "frames": [82, 83, 84, 85, 78, 79, 80, 81, 99, 98, 52, 53, 50, 51, 12, 13, 2, 3, 0, 1] },
        "bug/alive": { "frames": [4, 5, 6, 7, 8, 9, 10, 11, 22, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31] },
        "bug/dead": { "frames": [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77] },
        "plane/alive": { "frames": [106, 107, 108, 103, 104, 105, 95, 96, 97, 89, 90, 91, 100, 101, 102, 109, 110, 111, 92, 93, 94, 86, 87, 88] }
    },
    
    "texturepacker": [
            "SmartUpdateHash: $TexturePacker:SmartUpdate:047a4221dca5db572470615650e52dff:234bd85a0904743cf70ffc0bb1dae50c:1eabdf11f75e3a4fe3147baf7b5be24b$",
            "Created with TexturePacker (https://www.codeandweb.com/texturepacker) for EaselJS"
    ]
    
};

// game objects
let plane:createjs.Sprite;
let bug:createjs.Sprite;

// count the frame we are currently on
let frameCounter:number = 0;

// --------------------------------------------------- private methods
function randomMe(low:number = 1, high:number = 10):number {
    let randomNum:number = 0;
    randomNum = Math.floor(Math.random() * (high - low + 1)) + low;
    return randomNum;
}

// --------------------------------------------------- event handler
function onReady(e:createjs.Event):void {
    console.log(">> spritesheet loaded – ready to add sprites to game");

    // construct game object sprites
    plane = new createjs.Sprite(spriteSheet);
    plane.gotoAndPlay("plane/alive");
    plane.x = 100;
    plane.y = 100;
    stage.addChild(plane);

    bug = new createjs.Sprite(spriteSheet);
    bug.gotoAndPlay("bug/alive");
    bug.x = 200;
    bug.y = 200;
    stage.addChild(bug);

    // setup the ticker
    createjs.Ticker.framerate = FRAME_RATE;
    createjs.Ticker.on("tick", onTick);
    console.log(">> game ready");
}

function onTick(e:createjs.Event) {
    // console.log("TICK!");
    document.getElementById("fps").innerHTML = String(createjs.Ticker.getMeasuredFPS());

    // this is your game loop!
    frameCounter++;
    if (frameCounter == 30) {
        plane.x = randomMe(50, 550);
        plane.y = randomMe(50, 550);
        frameCounter = 0;
    }

    // update the stage
    stage.update();
}

=======
>>>>>>> 95dcef33d1ce31560eb883e6cd1df3dddd5ae1c0
// --------------------------------------------------- main method
function main():void {
    // get reference to canvas
    canvas = <HTMLCanvasElement> document.getElementById("game-canvas");
    // set canvas width and height - this will be the stage size
    canvas.width = STAGE_WIDTH;
    canvas.height = STAGE_HEIGHT;    

    // create stage object
    stage = new createjs.StageGL(canvas, { antialias: true });

<<<<<<< HEAD
    // construct Spritesheet object using data - will preload the assets.png
    spriteSheet = new createjs.SpriteSheet(data);
    // wait for spritesheet to fully load before building sprites
    if (spriteSheet.complete == false) spriteSheet.on("complete", onReady, this, true);
    else onReady(null);

=======
>>>>>>> 95dcef33d1ce31560eb883e6cd1df3dddd5ae1c0

}

main();