var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["54c64f79-06e9-4569-b003-9c1d9e2ce56a","4e0c3754-af3d-4105-a2e2-741184388366","48df0391-aac0-4252-b235-d6587bb026e0"],"propsByKey":{"54c64f79-06e9-4569-b003-9c1d9e2ce56a":{"name":"cogumelo","sourceUrl":null,"frameSize":{"x":322,"y":320},"frameCount":1,"looping":true,"frameDelay":12,"version":"atDdbp.R7JqDmhwkhKNpx3WaMM9ERGgf","loadedFromSource":true,"saved":true,"sourceSize":{"x":322,"y":320},"rootRelativePath":"assets/54c64f79-06e9-4569-b003-9c1d9e2ce56a.png"},"4e0c3754-af3d-4105-a2e2-741184388366":{"name":"estrela","sourceUrl":null,"frameSize":{"x":860,"y":836},"frameCount":1,"looping":true,"frameDelay":12,"version":"3NeO7rxGQE.hAhDToGy0rtQMNmifTz0E","loadedFromSource":true,"saved":true,"sourceSize":{"x":860,"y":836},"rootRelativePath":"assets/4e0c3754-af3d-4105-a2e2-741184388366.png"},"48df0391-aac0-4252-b235-d6587bb026e0":{"name":"mariozin","sourceUrl":null,"frameSize":{"x":820,"y":488},"frameCount":1,"looping":true,"frameDelay":12,"version":"264ie_oc9.1QkdLTOmlcCmgmEsJ_7hss","loadedFromSource":true,"saved":true,"sourceSize":{"x":820,"y":488},"rootRelativePath":"assets/48df0391-aac0-4252-b235-d6587bb026e0.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var 


var starGrupo = createGroup();
var coguGrupo = createGroup();

for (var i = 0; i<7; i++)
{
  var star = createSprite(40+50*i,97);
  star.setAnimation("estrela");
  star.scale = 0.08;
  
  var cogu = createSprite(40+50*i,145);
  cogu.setAnimation("cogumelo");
  cogu.scale = 0.15;
  
  starGrupo.add(star);
  coguGrupo.add(cogu);
  
}

var mario = createSprite(170,289);
mario.setAnimation("mariozin");
mario.scale = 0.15;
mario.rotationSpeed = 3;
//corrigindo o tamanho da colisão
mario.debug = false;
mario.setCollider("circle",0,0,150);
//********************************************

var raquete = createSprite(170,367,70,20);
raquete.shapeColor = "green";
//********************************************
//adicionei um fundo de imagem
var fundo = loadImage("assets/ddxznzn-fd927466-8346-4e9b-af17-c79451900987.png");


var pontos = 0;

//*****************************************
function draw() {
background("white");
//colocando uma imagem na tela inteira como fundo
image(fundo,0,0,World.width, World.height);


//pontuação
textFont("comic_sans");
fill(0);
stroke(0);
textSize(25);
//concatenar
text("PONTUAÇÃO: "+pontos,114,26);




//movimento
raquete.x = World.mouseX;

if(keyDown("space"))
{
 mario.velocityX = 5;
 mario.velocityY = 5;
}


createEdgeSprites();
mario.bounceOff(raquete);
mario.bounceOff(rightEdge);
mario.bounceOff(leftEdge);
mario.bounceOff(topEdge);
mario.bounceOff(coguGrupo, quebrarC);
mario.bounceOff(starGrupo,quebrarS);


//quebrar as paredes


 drawSprites(); 
}

function quebrarC(mario, cogu)
{
  cogu.destroy();
  pontos = pontos +1;
}

function quebrarS()
{
  star.destroy();
  pontos = pontos +1;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
