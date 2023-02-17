class SkylitTabHolder{
	constructor(parent){
		this.mainClass = "skylit-tab-holder";
		this.tabClass = "skylit-tab";
		this.holder;
		this.parent = parent;
		this.uniqueTabId;
		this.slideBtnRight;
		this.slideBtnLeft;
		this.slideDecoyRight;
		this.slideDecoyLeft;
	}
	createTabHolder(){
		let self = this;
		this.holder = document.createElement("div");
		this.holder.classList.add(this.mainClass);
		// checks for an overflow and updates UI whenever the screen resizes so the tabs will always look amazing 
		window.addEventListener("resize",function(evt){
  			self.updateOverflow()
		});
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
						element.classList.replace("skylit-tab-show", "skylit-tab-hide");
						let splitId = self.id.split("-");
						let splitElement = element.id.split("-");
						// if the radio id end number and element id end number are the same
						// we can show that tab 
						if(splitId[2] == splitElement[3]){
							element.classList.replace("skylit-tab-hide", "skylit-tab-show");
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
	}

	createLeftSlideButtton(){
		let self = this;
		this.slideBtnLeft = this.createSlideButton("slide-left","<");
		this.slideDecoyLeft = this.createSlideDecoy("slide-decoy",">")
		this.slideBtnLeft.addEventListener("click",function(evt){
			self.holder.scrollLeft -= 30;
		})

		this.holder.append(this.slideBtnLeft);
		this.holder.append(this.slideDecoyLeft);
	}

	createRightSlideButtton(){
		let self = this;
		this.slideBtnRight = this.createSlideButton("slide-right",">");
		this.slideDecoyRight = this.createSlideDecoy("slide-decoy",">")
		this.slideBtnRight.addEventListener("click",function(evt){
			self.holder.scrollLeft += 30;
		})
		this.holder.prepend(this.slideBtnRight);
		this.holder.prepend(this.slideDecoyRight);
	}

	createSlideButton(id,direction){
		let slideButton = document.createElement("button");
		slideButton.textContent = direction;
		slideButton.setAttribute("id",id);
		slideButton.setAttribute("hidden",true);
		slideButton.style.height = this.holder.offsetHeight + "px";

		return slideButton;
	}

	createSlideDecoy(className,direction){
		/*
			We create a slide decoy button that matches the exact specs of the fixed button 
			This way the width of the holder will update as if the fixed buttons are not fixed
		*/
		let slideDecoy = document.createElement("button");
		slideDecoy.textContent = direction;
		slideDecoy.classList.add(className);
		slideDecoy.setAttribute("hidden",true);

		return slideDecoy;
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

	getContainer(){
		return this.holder;
	}

	/*
		Checks the tab holder for any otherflow (small screen or lots of tabs on holder), 
		if overflow is detected two scroll buttons will appear so the user can horizontally
		go though the created tabs.   
	*/
	updateOverflow(){
		if(this.isOverflown(this.holder)){
			this.slideBtnRight.removeAttribute("hidden")
			this.slideBtnLeft.removeAttribute("hidden")

			this.slideDecoyRight.removeAttribute("hidden")
			this.slideDecoyLeft.removeAttribute("hidden")
		}else{
			this.slideBtnRight.setAttribute("hidden",true);
			this.slideBtnLeft.setAttribute("hidden",true);
			this.slideDecoyRight.setAttribute("hidden",true);
			this.slideDecoyLeft.setAttribute("hidden",true);
		}
	}

	isOverflown(element) {
  		return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
	}
}