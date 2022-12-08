import React, { Component } from 'react';

class MainComponent extends Component {
    render() {
        return (
            <div className='component'>
                <h3>테스트를 선택해주세요!</h3>
                <ul>
                    <li><div className='test_img'></div><a href='/quiz'>1_번테스트</a></li>
                    <li><div className='test_img'></div><a href='/quiz'>2_번테스트</a></li>
                    <li><div className='test_img'></div><a href='/quiz'>3_번테스트</a></li>
                    <li><div className='test_img'></div><a href='/quiz'>4_번테스트</a></li>
                    <li><div className='test_img'></div><a href='/quiz'>5_번테스트</a></li>
                    <li><div className='test_img'></div><a href='/quiz'>6_번테스트</a></li>
                </ul>
            </div>
        );
    }
}

export default MainComponent;