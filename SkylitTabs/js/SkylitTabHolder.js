class SkylitTabHolder{
	constructor(parent){
		this.mainClass = "skylit-tab-holder";
		this.tabClass = "skylit-tab";
		this.holder;
		this.parent = parent;
	}
	createTabHolder(){
		this.holder = document.createElement("div");
		this.holder.classList.add(this.mainClass);
	}

	createTab(tabName,tabAmt){
		// get a unique number to add to the radio id 
		// this will allow the label to work properly 
		// if more then 1 SkylitTab is created
		let uniqueRadioId = this.getUniqueTabId(tabAmt);
		let RadioId = "skylit-tab-" + tabAmt + "-" + uniqueRadioId;
		// grab the children of the top most parent
		let parentsChildren = this.parent.childNodes;

		let tabCtn = document.createElement("div");
		tabCtn.classList.add(this.tabClass);

		let radio = document.createElement("input");
		radio.setAttribute("type", "radio");
		radio.setAttribute("hidden",true);
		radio.classList.add("skylit-radio");
		radio.setAttribute("name","skylit-tab" + "-" + uniqueRadioId);
		radio.setAttribute("id",RadioId);
		if(tabAmt == 0){
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

		this.holder.append(tabCtn)
	}

	getUniqueTabId(tabAmt){
		let uniqueTabId = 100;
		while(document.getElementById("skylit-tab-" + tabAmt + "-" + uniqueTabId)){
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
}