import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

const DataComponent = (ComposedComponent, url) =>
    class DataComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [],
                loading: false,
                loaded: false
            };
        }

        componentWillMount() {
            this.setState({ loading: true });
            fetch(url)
                .then(response => response.json())
                .then(data => this.setState({
                    loading: false,
                    loaded: true,
                    data
                }))
        }

        render() {
            return (
                <div className="data-component">
                    {(this.state.loading) ?
                        <div>Loading...</div> :
                        <ComposedComponent {...this.sate} {...this.props} />
                    }
                </div>
            );
        }
    };

export default DataComponent;