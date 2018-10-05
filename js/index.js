function clockTick() {
	var element =	React.createElement('div', null,
	React.createElement('h2', null, new Date().toLocaleTimeString()));
	ReactDOM.render(element, document.getElementById('root'));
}
setInterval(clockTick, 1000);

