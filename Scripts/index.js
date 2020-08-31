/// <reference path="p5.min.js"/>

let rainDropSprite, initialX = [], initialY = [], scales = [];

function randomNumber(min, max) 
{  
    return Math.random() * (max - min) + min; 
}  

function preload()
{
    rainDropSprite = loadImage("../Sprites/raindrop.png");
}

function setup()
{
    createCanvas(640, 480);
    for (let i = 0; i < 1000; i++)
    {
        scales.push(randomNumber(0.9, 1));
        initialX.push(Math.trunc(randomNumber(0, 640)));
        initialY.push(Math.trunc(randomNumber(-100, 480)));
    }
}

function draw()
{
    background(230, 230, 255);

    for (let i = 0; i < 1000; i++)
    {
        scale(scales[i]);
        image(rainDropSprite, initialX[i], initialY[i]);
        initialY[i] += 10;
        if (initialY[i] > 513)
        {
            initialX[i] = randomNumber(0, 640);
            initialY[i] = randomNumber(-100, -33);
        }
    }
}