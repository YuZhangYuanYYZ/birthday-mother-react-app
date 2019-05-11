import React from 'react';
import NewsList from './news-list'
import resultData from './data.json';
import photo1 from './images/motherWechatPhoto.jpeg'
import photo2 from './images/momAndMeInPlantsGarden.jpeg'
import photo3 from './images/Sister.jpeg'
import photo4 from '././images/threeOfUs.jpg'

const images = [photo1, photo2, photo3,photo4]
class NewsContainer extends React.Component {
    constructor(porps) {
        super(porps);
        this.state = { data: [] }
    }

    componentDidMount() {
        const result = resultData.map((item,index)=>{
            return {
                ...item,
                imgSrc: images[index]
            }
        });

        this.setState({ data: result })
    }

    render() {
        return (
            <div>
                <NewsList posts={this.state.data} />
            </div >
        )
    };
}

export default NewsContainer;