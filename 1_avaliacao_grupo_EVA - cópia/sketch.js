var t, numLinhas, numColunas, escolheForma;


function setup() 
{
  createCanvas (windowWidth, windowHeight);
  frameRate(1);
}


function draw() 
{
  background(94, 25, 192);
  
  t = width/10;
  numLinhas = height/t;
  numColunas = width/t;
  //print(t);

  noStroke();
  //fill
  ellipseMode (CORNER);


   for (var x = 0; x<numColunas; x++)
   {
    for (var y = 0; y<numLinhas; y++)
    {
      escolheForma = int (random (1,4));
      //print /escolhaForma)
      
      if (escolheForma === 1)
      {
        //ellipse(x*t, y*t, t, t);
        line (0, 0, width, 0);
        line (0, height/2, width, height/2);
        line (0, height-1, width, height-1);
        stroke(158, 237, 75);
        strokeWeight(6);
      }

      if (escolheForma === 2)
      {
        line(0, 0, width/2, height);
        line(width/2, height, width, 0);
        
      }

      if (escolheForma === 3)
      {
        line(0, height, width/2, 0);
        line(width/2, 0, height, width);
      }

    }
  }
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
