import React from 'react';

class StorePicker extends React.Component {
	render(){
		return (
			<div>
				<form className="store-selector">
					{ /* this is a comment in JSX */ }
					<h2>Please Enter A Store</h2>
					<input type="text" placeholder="Store Name"/>
					<button type="submit">Visit Store</button>
				</form>				
			</div>
		)
	}
}

export default StorePicker;