var state = history.state || {};
var i = 0;
var time = 50;
var txt = "You are not authorized to view this page."
var reloadCount = state.reloadCount || 0;
var changed = false

if (performance.navigation.type === 1) { // Reload
    state.reloadCount = ++reloadCount;
    history.replaceState(state, null, document.URL);
} else if (reloadCount) {
    delete state.reloadCount;
    reloadCount = 0;
    history.replaceState(state, null, document.URL);
}
if (reloadCount >= 5) {
	setbackground();
}

function setbackground()
{	
	txt = "Welcome, Overseer."
	time = 200
	changed = true;
}

function typeWriter() {
  	if (i < txt.length) {
    		document.getElementById("demo").innerHTML += txt.charAt(i);
    		i++;
    		setTimeout(typeWriter, time);
  	}else{
		if (changed)
		{
			var btn = document.createElement("BUTTON");
			var t = document.createTextNode("Access File #3000");
			btn.appendChild(t);
			document.body.appendChild(btn); 
		}  
	}
}

typeWriter()