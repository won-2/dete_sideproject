import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav  id='header'>
                        <div className='navv'>
                            <div id='logo'>
                                <div className='main_icon'></div>
                                <span className='dete'>De. Te</span>    
                            </div>
                            <div>PAGE TITLE</div>
                        </div>

                    </nav>

                </header>
            </div>
        );
    }
}

export default HeaderComponent;