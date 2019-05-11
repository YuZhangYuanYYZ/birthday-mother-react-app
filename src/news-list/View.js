import './style.scss'
import React from 'react';
import Newscard from '../news-card'
import VideoSource from '../images/video.mp4'

function View(props) {
    const posts = props.posts;
    const listNews = posts.map(post => (
        <li key={post.id} >
            <Newscard element={post} />
        </li >
    )
    );
    return (
        <div>
            <ul>
                {listNews}
            </ul>
            <video className="app-video" controls>
                <source src={VideoSource} type="video/mp4"/>
                Your browser does not support the video.
            </video>
        </div>
    )
}

export default View;
