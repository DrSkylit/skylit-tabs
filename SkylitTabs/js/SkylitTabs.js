class SkylitTabs{
	constructor(){
		this.mainClass = "skylit-tab-container";
		this.maxTabNameLength = 25;
		this.tabData = [];
		this.startingTab = "";
		this.mainContainer = this.createContainer();
		this.skylitTabHolder = this.createTabHolder();
	}

	addTab(tabName,element){
		if(tabName.length >this.maxTabNameLength){
			throw new Error("Tab names can only be " + this.maxTabNameLength + " characters long, This is so tab names dont get to big. To override this please call setmaxTabNameLength()");
		}
		this.tabData.push({
			"name": tabName,
			"element": element,
		});
	}

	buildSkylitTabs(){
		// check for tab name if starting tab is set
		this.startingTabCheck()
		for(let i=0; i < this.tabData.length; i++){
			let tabName = this.tabData[i].name;
			let element = this.tabData[i].element;
			let div = document.createElement("div");
			div.setAttribute("id","skylit-tab-content-" + i);
			if(this.isStartingTab(tabName)){
				this.skylitTabHolder.createTab(tabName,i,true);
				div.classList.add("skylit-show");
			}else{
				this.skylitTabHolder.createTab(tabName,i,false);
				div.classList.add("skylit-hidden");
			}
			div.classList.add("skylit-tab-content");
			if(!element){
				throw new Error("No HTML Elements Given To Function createTabContainer.");
			}
			div.append(element);
			this.mainContainer.append(div)
		}

		this.skylitTabHolder.createLeftSlideButtton();
		this.skylitTabHolder.createRightSlideButtton();
		this.skylitTabHolder.updateOverflow();
	}

	createContainer(){
		let container = document.createElement("div");
		container.classList.add(this.mainClass);
		return container
	}

	createTabHolder(){
		let skylitTabHolder = new SkylitTabHolder(this.mainContainer);
		skylitTabHolder.createTabHolder();
		this.mainContainer.append(skylitTabHolder.getContainer());
		return skylitTabHolder;
	}

	appendTo(id){
		let userContainer = document.getElementById(id);
		userContainer.append(this.mainContainer)
	}

	addClassToContainer(className){
		this.mainContainer.classList.add(className);
	}

	addIdToContainer(idName){
		let id = this.mainContainer.id + " " + idName; 
		this.mainContainer.setAttribute('id',id)
	}

	addClassToTabHolder(className){
		this.skylitTabHolder.addClass(className);
	}

	addIdToTabHolder(idName){
		this.skylitTabHolder.addId(idName);
	}

	startingTabCheck(){
		if(this.startingTab){
			let self = this
			let exists = false;
			exists = this.tabData.find(function(el){
				return el.name == self.startingTab;
			});
			if(!exists){
				throw new Error(this.startingTab + " Does not match any tabs names");
			}
		}else{
			this.startingTab = this.tabData[0]["name"];
		}
	}

	isStartingTab(name){
		if(this.startingTab === name){
			return true;
		}else{
			return false;
		}
	}

	/*
		Getters and Setters
	*/ 

	setmaxTabNameLength(length){
		this.maxTabNameLength = length;
	}

	setStartingTab(tabName){
		this.startingTab = tabName;
	}

	setScrollSpeed(speed){
		this.skylitTabHolder.setScrollSpeed(speed);
	}
};