import React from 'react';

class Header extends React.Component {
	render() {
		return (
		<header className="top">
			<h3 className="tagline">{this.props.tagline}</h3>
		</header>
		)
	}
}

export default Header;