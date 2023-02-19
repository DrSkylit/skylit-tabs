document.addEventListener('DOMContentLoaded',function(){

  createGamesTabs();
  createDogsTabs();
  createConsoleTabs()

}, false);

function createGamesTabs(){
  let skylitTabs = new SkylitTabs();
  // tell SkylitTabs What to parent div to appened to
  skylitTabs.appendTo("game-tab-container");

  // create tabs
  let deadSpace = game("Dead Space", "10", "Dead Space is set in 2508. Earth has gone through an extinction-level event, caused by rapacious and unsustainable use of resources. The remaining humans realized that the only way to gain the resources to survive would be to search new planets for resources.");
  skylitTabs.addTab("Horror",deadSpace);

  let symphonia = game("Tales Of Symphonia", "10", "The game takes place in a fictional world called Sylvarant and follows Lloyd Irving. Lloyd accompanies his childhood friend, Colette Brunel, who is destined to go on a journey to save their world. As their journey progresses, they learn that saving Sylvarant endangers Tethe'alla, a world parallel to their own.");
  skylitTabs.addTab("JRPG",symphonia);
  
  let banjo = game("Banjo-Kazooie", "10", "A bear named Banjo and a bird named Kazooie set out on a quest to rescue Banjo's sister, Tooty, who was kidnapped by the witch Gruntilda. Along their journey");
  skylitTabs.addTab("Platforming",banjo);

  skylitTabs.buildSkylitTabs();
}

function createDogsTabs(){
  let skylitTabs = new SkylitTabs();
  skylitTabs.appendTo("dog-tab-container");
  let borderCollie = dog("Border Collie", "The head is like that of a collie, and the body is slightly longer than the dog is tall. The ears stand but the tips drop over, giving them a jaunty appearance. Some border collies have a coarse coat about three inches long, while others have a sleek coat about one inch long.");
  skylitTabs.addTab("Border Collie",borderCollie);

  scottishDeerhound = dog("Scottish Deerhound ", "The Scottish deerhound is best described as a large greyhound cloaked in a wiry coat. The breed has the typical greyhound family traits of long, slender legs, relatively narrow body, deep chest, tucked abdomen, arched loin and long tail.");
  skylitTabs.addTab("Scottish Deerhound",scottishDeerhound);

  Australian = dog("Australian Shepherd", "Australian shepherds are about 18 to 23 inches in height, and weigh from about 40 to 60 pounds (18 to 27 kilograms). Males generally are taller and heavier than females. Aussies live about 10 to 12 years.");
  skylitTabs.addTab("Australian Shepherd",Australian);

  Basenji = dog("Basenji", "Basenji are small, graceful hounds standing 16 or 17 inches at the shoulder. They are recognizable by their glistening short coat");
  skylitTabs.addTab("Basenji",Basenji);

  skylitTabs.setStartingTab("Basenji");

  skylitTabs.buildSkylitTabs();

}

function createConsoleTabs(){
  let skylitTabs = new SkylitTabs();
  skylitTabs.appendTo("consoles-tab-container");

  let gameAndWatch = gameConsole("Game And Watch", "1990");
  skylitTabs.addTab("Game And Watch",gameAndWatch);

  let nes = gameConsole("NES", "1983");
  skylitTabs.addTab("NES",nes);

  let gameBoy = gameConsole("Game Boy", "1989");
  skylitTabs.addTab("Game Boy",gameBoy);

  let snes = gameConsole("SNES", "1990");
  skylitTabs.addTab("SNES",snes);

  let VB = gameConsole("Virtual Boy", "1995");
  skylitTabs.addTab("Virtual Boy",VB);

  let nintendo64 = gameConsole("Nintendo 64", "1996");
  skylitTabs.addTab("Nintendo 64",nintendo64);

  let GBC = gameConsole("Game Boy Color", "1998");
  skylitTabs.addTab("GBC",GBC);

  let GBA = gameConsole("Game Boy Advance", "2001");
  skylitTabs.addTab("GBA",GBA);  

  let gameCube = gameConsole("GameCube", "2001");
  skylitTabs.addTab("GameCube",gameCube);

  let DS = gameConsole("Nintendo DS", "2004");
  skylitTabs.addTab("DS",DS);

  let wii = gameConsole("Wii", "2006");
  skylitTabs.addTab("Wii",wii);

  let DS3 = gameConsole("Nintendo 3DS", "2011");
  skylitTabs.addTab("3DS",DS3);

  let wiiU = gameConsole("Wii U", "2012");
  skylitTabs.addTab("Wii U",wiiU);

  let nintendoSwitch = gameConsole("Nintendo Switch", "2017");
  skylitTabs.addTab("Nintendo Switch",nintendoSwitch);

  skylitTabs.setScrollSpeed(100);

  skylitTabs.buildSkylitTabs();
}

function game(name,score,desc){
  let div = document.createElement("div");
  let nameP = document.createElement("p");
  nameP.textContent = name;
  let scoreP = document.createElement("p");
  scoreP.textContent = score;
  let descP = document.createElement("p");
  descP.textContent = desc;

  div.append(nameP)
  div.append(scoreP)
  div.append(descP)

  return div;
}

function dog(name,desc){
  let div = document.createElement("div");
  let nameP = document.createElement("p");
  nameP.textContent = name;
  let descP = document.createElement("p");
  descP.textContent = desc;

  div.append(nameP)
  div.append(descP)

  return div;
}

function gameConsole(name,year,image){
  let div = document.createElement("div");
  let nameP = document.createElement("p");
  nameP.textContent = name;
  let created = document.createElement("p");
  created.textContent = "Created: " + year;

  div.append(nameP)
  div.append(created)

  return div;
}