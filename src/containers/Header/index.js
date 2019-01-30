import React from 'react';
import Menu from './Menu';
class Header extends React.Component {
    render() {

        return (
            <header>
                <Menu menu={this.props.menu}/>
            </header>
        ) 
    }
}

export default Header;