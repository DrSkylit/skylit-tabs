# Skylit Tabs  
*This is a work in progress*   
*hopefully I will have a stable release soon!*
## Table of Contents
1. [Description](#Description)
2. [How To Use](#How-To-Use)
3. [Public Functions](#Public-Functions)
4. [CSS Overrides](#CSS-Overrides)
5. [Credits](#Credits)

### Description
SkylitTabs is a simple vanilla javascript component that adds navigation tabs to any web project. It is mobile friendly, easy to use, and has zero bulk. Since this is a single component you can be assured that it has only one job and it does that job extremely well. Another great thing about this component is that it is fully built in vanilla javascript using ES6, So there is no need for yet another bulky javascript framework to add to your stack just so you can add mediocre navigation tabs. 

### How To Use  
1. Include the javascript and css files to your project and you are ready to rumble. 
 
2. Add a div with a special id that SkylitTabs can use
#### in html
```
...
<body>
	<div id="tab-container"></div>
</body>
...
```
#### in javascript
```
let ctn = document.createElement("div");
ctn.setAttribute("id",tab-container);
let body = document.body;
body.append(ctn)
```
3. After a container has been created and placed on the DOM We create a new instance of the SkylitTabs Object and add our newly created div utilizing its id

```
let skylitTabs = new SkylitTabs();
skylitTabs.appendTo("tab-container");
```
4. After that all you need to do is create whatever you want and then pass it to the addTab  function along with the name of the tab.  
In this example we create 4 tabs that hold different dog breeds and a description about them.  

```
// here i am creating my content I want displayed in my tab   
// this example will show you how to create different tabs for dog breeds

createDogsTabs();

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
  
  skylitTabs.buildSkylitTabs();

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
```
5. This is the base example and will be a good start in using SkylitTabs   
![Dog Breed Tabs](/example/screenshots/DogBreedTabs.png)

### Public Functions  
| Name | Description | Params |
| --- | --------- | -------- |
| addTab | addTab allows the user to create a new tab. It has 2 parameters a tabName and an element. The element is an html element created in javascript and will most likely be a div with other elements placed on it.  | tabName:string, element:object | 
| buildSkylitTabs | The last function that should be called. This will take all the tabs and options and create your SkylitTabs ans place it onto the DOM  | None|
| appendTo | This function will append the SkylitTabs to a user created div | id:string | 
| addClassToContainer | This will add a class to the outer most container that was created by SkylitTabs  | className:string | 
| addIdToContainer | This will add a id to the outer most container that was created by SkylitTabs  | idName:string | 
| addClassToTabHolder | This will add a class to the container that holds the tab buttons| idName:string | 
| addIdToTabHolder | This will add a id to the container that holds the tab buttons| idName:string |
| setmaxTabNameLength | Used to override the max length a tab name can be. Be careful when updating this value as long tab names could make the UI look bad| length:int | 
| setStartingTab | Used to change the starting selected tab, which is usually set to the first tab that is created. You pass it the name of the tab you want to be the first selected tab | tabName:string |
| setScrollSpeed | Used to update the speed at which the slider buttons scroll.You will only see these buttons if there are to many tabs for the TabHolder | speed:int |   

### CSS Overrides
| Name | Description | css |
| --- | --------- | -------- |
| Tab Color | ChangesCredits the base tab color | .skylit-tab-label{ background:\<colorHere> } |
| Tab Hover Color | Changes the mouse hover tab color | .skylit-tab-label:hover{ background:\<colorHere> } |
| Tab Selected Color | Changes the Selected tab color | .skylit-radio:checked + .skylit-tab-label { background:\<colorHere> } |
| Tab text Color | Changes the color of the text on a tab | .skylit-radio:checked + .skylit-tab-label { color:\<colorHere> } |

** Note, if you have multiple instances of SkylitTabs and just select these as is you will change all instances. If you want to just change one Instance you will need to add a class or id to the TabHolder so you can add specificity in your selections. 
### Credits   
Christopher Dolce
