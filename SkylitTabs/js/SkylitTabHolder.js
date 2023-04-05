/*!
 * skylit-tabs
 *
 * Copyright © 2023 Christopher Dolce 
 * Apache license 
 * https://github.com/DrSkylit/skylit-tabs
 */

class SkylitTabHolder{
	constructor(parent){
		this.parent = parent;
		this.mainClass = "skylit-tab-holder";
		this.tabClass = "skylit-tab";
		this.holder;
		this.uniqueTabId;
		this.slideBtnRight;
		this.slideBtnLeft;
		this.scrollSpeed = 50;
		this.maxScrollSpeed = 250;
		this.minScrollSpeed = 1;
	}
	createTabHolder(){
		this.holder = document.createElement("div");
		this.holder.classList.add(this.mainClass);
		// checks for an overflow and updates UI whenever the screen resizes so the tabs will always look amazing 
		this.createResizeEvent();
	}

	createTab(tabName,tabNum,isStarting){
		// get a unique number to add to the radio id 
		// this will allow the label to work properly 
		// if more then 1 SkylitTab is created
		if(this.uniqueRadioId == null){
			// we only need to grab a Unique tab id for the
			// first tab, The rest wiill use that same id
			this.uniqueRadioId = this.getUniqueTabId(tabNum);
		}
		let RadioId = "skylit-tab-" + tabNum + "-" + this.uniqueRadioId;
		// grab the children of the top most parent
		let parentsChildren = this.parent.childNodes;

		let tabCtn = document.createElement("div");
		tabCtn.classList.add(this.tabClass);

		let radio = document.createElement("input");
		radio.setAttribute("type", "radio");
		radio.setAttribute("hidden",true);
		radio.classList.add("skylit-radio");
		radio.setAttribute("name","skylit-tab" + "-" + this.uniqueRadioId);
		radio.setAttribute("id",RadioId);

		if(isStarting){
			radio.setAttribute("checked", true);
		}

		radio.addEventListener("change",function(evt){
			let self = this;
			if(this.checked){
				// loop though the children of the Object
				parentsChildren.forEach(function(element){
					let hasClass = element.classList.contains("skylit-tab-content")
					// if its class contains the skylit-tab-content we want to hide it
					// this will hide all tabs
					if(hasClass){
						element.classList.replace("skylit-show", "skylit-hidden");
						let splitId = self.id.split("-");
						let splitElement = element.id.split("-");
						// if the radio id end number and element id end number are the same
						// we can show that tab 
						if(splitId[2] == splitElement[3]){
							element.classList.replace("skylit-hidden", "skylit-show");
						}
					}
				});
			}
		});
		let label = document.createElement("label");
		label.setAttribute("for",RadioId);
		label.classList.add("skylit-tab-label");
		label.textContent = tabName;

		tabCtn.append(radio);
		tabCtn.append(label);
		this.holder.append(tabCtn);
		/*
			if the height of the tab holder is changed this will make sure that the tab label
			will always be centered

		*/
		let paddingTop = getComputedStyle(label).getPropertyValue('padding-top');
		let paddingBotttom = getComputedStyle(label).getPropertyValue('padding-bottom');
		// we need to remove the px and convert to an int 
		paddingTop = parseInt(paddingTop.substring(0, paddingTop.length-2));
		paddingBotttom = parseInt(paddingBotttom.substring(0, paddingBotttom.length-2));
		label.setAttribute("style","line-height:" + (this.holder.clientHeight-(paddingTop+paddingBotttom)) + "px");
	}

	createLeftSlideButtton(){
		let self = this;
		this.slideBtnLeft = this.createSlideButton("skylit-slide-left","<");
		this.slideBtnLeft.addEventListener("click",function(evt){
			self.holder.scrollBy({
  				left: -self.scrollSpeed,
  				behavior: 'smooth'
			});
		});

		this.holder.prepend(this.slideBtnLeft);
	}

	createRightSlideButtton(){
		let self = this;
		this.slideBtnRight = this.createSlideButton("skylit-slide-right",">");
		this.slideBtnRight.addEventListener("click",function(evt){
			self.holder.scrollBy({
  				left: self.scrollSpeed,
  				behavior: 'smooth'
			});
		});
		
		this.holder.append(this.slideBtnRight);
	}

	createSlideButton(id,direction){
		let slideButton = document.createElement("div");
		slideButton.classList.add("skylit-slide-btn");
		slideButton.setAttribute("id",id);
		slideButton.setAttribute("hidden",true);

		let arrowCtn = document.createElement("div");
		arrowCtn.classList.add("skylit-arrow-ctn");
		let arrow = document.createElement("span");
		arrow.textContent = direction;
		arrowCtn.append(arrow)

		slideButton.append(arrowCtn)

		/*
			since these buttons have a position of absolute we need to 
			figure out the height of their parent on the fly and update
			them accordingly	
		*/
		slideButton.setAttribute("style","line-height:" + (this.holder.clientHeight) + "px");
		return slideButton;
	}

	createResizeEvent(){
		let self = this;
		window.addEventListener("resize",function(evt){
  			self.updateOverflow()
		});
	}

	getUniqueTabId(tabNum){
		let uniqueTabId = 100;
		while(document.getElementById("skylit-tab-" + tabNum + "-" + uniqueTabId)){
			uniqueTabId++;
		}
		return uniqueTabId;
	}

	addClass(className){
		this.holder.classList.add(className);
	}

	addId(idName){
		let id = this.holder.id;
		if(this.holder.id){
			id += " " + idName; 
		}else{
			id += idName; 
		}
		this.holder.setAttribute('id',id)
	}
	/*
		Checks the tab holder for any otherflow (small screen or lots of tabs on holder), 
		if overflow is detected two scroll buttons will appear so the user can horizontally
		go though the created tabs.   
	*/
	updateOverflow(){
		if(this.isOverflow(this.holder)){
			this.slideBtnRight.classList.remove("skylit-hidden");
			this.slideBtnLeft.classList.remove("skylit-hidden");
		}else{
			this.slideBtnRight.classList.add("skylit-hidden");
			this.slideBtnLeft.classList.add("skylit-hidden");
		}
	}

	isOverflow(element) {
  		return element.scrollWidth > element.clientWidth;
	}

	/*
		Getters and Setters
	*/ 

	getContainer(){
		return this.holder;
	}

	setScrollSpeed(speed){
		if(speed >= this.minScrollSpeed && speed <= this.maxScrollSpeed){
			this.scrollSpeed = speed;
		}else if(speed > this.maxScrollSpeed){
			throw new Error("scroll speed cannot be more then "+this.maxScrollSpeed+". please set it between "+this.minScrollSpeed+" and "+this.maxScrollSpeed);	
		}else{
			throw new Error("scroll speed cannot be 0 or less. please set it between "+this.minScrollSpeed+" and "+this.maxScrollSpeed);
		}
	}
}