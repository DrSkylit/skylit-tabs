class SkylitTabs{
	constructor(){
		this.tabCount = 0;
		this.mainClass = "skylit-tab-container";
		this.mainContainer = this.createContainer();
		this.skylitTabHolder = this.createTabHolder();
	}

	createTabContainer(tabName,element){
		this.skylitTabHolder.createTab(tabName,this.tabCount);

		let div = document.createElement("div");
		div.setAttribute("id","skylit-tab-content-" + this.tabCount);
		if(this.tabCount == 0){
			div.classList.add("skylit-tab-show");
		}else{
			div.classList.add("skylit-tab-hide");
		}
		div.classList.add("skylit-tab-content");
		if(!element){
			throw new Error("No HTML Elements Given To Function createTabContainer.");
		}
		div.append(element);
		this.mainContainer.append(div)
		this.tabCount++;
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

	appendTo(element){
		let userContainer = document.getElementById(element);
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
};