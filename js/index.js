
// function component method
function Clock(props) {
	return React.createElement("h1", null, "Hello, ", props.name, " it's ",  new Date().toLocaleTimeString() );
}

function renderClockComponent(){
	var element = React.createElement(Clock, { name: "MG" });
	ReactDOM.render(element, document.getElementById('root'));
}

setInterval(renderClockComponent, 1000);
