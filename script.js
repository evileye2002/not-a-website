const body = document.querySelector("body"),
	sidebar = body.querySelector(".sidebar"),
	toggle = body.querySelector(".toggle"),
	searchBtn = body.querySelector(".search-box"),
	modeSwitch = body.querySelector(".toggle-switch"),
	modeText = body.querySelector(".mode-text");
	
	modeSwitch.addEventListener("click", () =>{
		body.classList.toggle("light")
		
		if(body.classList.contains("light")){
			modeText.innerText = "Light Mode"
		}else{
			modeText.innerText = "Dark Mode"
	}
	});
	
	toggle.addEventListener("click", () =>{
		sidebar.classList.toggle("close")
	});
	
	
	