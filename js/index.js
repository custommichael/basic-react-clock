class Clock extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div>
				<h1>
					Using a component with props, it is {this.props.ts}
				</h1>
			</div>
		);
	}
}

function clockTick(){
	const timestamp  = ( new Date().toLocaleTimeString() );
	var element = React.createElement(Clock, { ts: timestamp });
	ReactDOM.render(element, document.getElementById('root'));
}

setInterval(clockTick, 1000);
