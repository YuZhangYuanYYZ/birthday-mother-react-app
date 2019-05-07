import React from 'react';
import NewsList from './news-list'
import resultData from './data.json';

class NewsContainer extends React.Component {
    constructor(porps) {
        super(porps);
        this.state = { data: [] }
    }

    componentDidMount() {
        const result = resultData;

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