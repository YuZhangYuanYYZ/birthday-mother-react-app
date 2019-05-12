import './style.scss'
import React from 'react';

function View() {

    return (
        <div className="flex1">
            <ul class="flex-container1">
                <li class="flex-item1">1</li>
                <li class="flex-item1">2</li>
                <li class="flex-item1">3</li>
                <li class="flex-item1">4</li>
                <li class="flex-item1">5</li>
                <li class="flex-item1">6</li>
            </ul>
            <ul class="navigation">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>



    )

}

export default View;