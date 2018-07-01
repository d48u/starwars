import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class StarWarsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            results: []

        }
    }
    
        componentDidMount() {
        fetch('https://starwars.dev/json')
                .then(res => {
                    return res.json();
                })
                .then(
                        (result) => {
                    this.setState({
                        isLoaded: true,
                        results: result.results
                    });
                },
                        (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
                )
    }

    render() {

        const {error, isLoaded, results} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {

            return (
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-16">
                                <div className="card">
                                    <div className="card-header">Star Wars Characters </div>
                    
                                    <div className="card-body">
                                        Star Wars Characters List
                                    </div>
                    
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Height</th>
                                                <th>Mass</th>
                                                <th>Hair color</th>
                                                <th>Skin color</th>
                                                <th>Eye color</th>
                                                <th>Birth year</th>
                                                <th>Gender</th>
                                                <th>Homeworld</th>
                                                <th>Films</th>
                                                <th>Species</th>
                                                <th>Vehicles</th>
                                                <th>Starships</th>
                                                <th>Created</th>
                                                <th>Edited</th>
                                                <th>Url</th>
                                            </tr>
                                        </thead>
                    
                                        <tbody>
                    
                                            {results.map(item => (
                                                        <Character result={ item } />                                          
                                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    );
        }
    }

}

function Character(props) {
    return (
            <tr>
                <td>{ props.result.name }</td>
                <td>{ props.result.height }</td>
                <td>{ props.result.mass }</td>
                <td>{ props.result.hair_color }</td>
                <td>{ props.result.skin_color }</td>
                <td>{ props.result.eye_color }</td>
                <td>{ props.result.birth_year }</td>
                <td>{ props.result.gender }</td>
                <td><a href={ props.result.homeworld }>A</a></td>       
                <td>                                                  
                    {props.result.films.map(url => (
                                        <UrlApi url={ url } />
                                    ))}
            </td>
            <td>
                {props.result.species.map(url => (
                                <UrlApi url={ url } />
                            ))}
            </td>
            <td>
                {props.result.vehicles.map(url => (
                                <UrlApi url={ url } />
                            ))}
            </td>
            <td>
                {props.result.starships.map(url => (
                                <UrlApi url={ url } />
                            ))} 
            </td>
            <td>{ props.result.created }</td>  
            <td>{ props.result.edited }</td>
            <td><a href={ props.result.url }>A</a></td>  
            </tr>

            );
}

function UrlApi(props) {
    return (
            <a href={ props.url }>A</a>
            );
}


if (document.getElementById('starwarslist')) {
    ReactDOM.render(<StarWarsList />, document.getElementById('starwarslist'));
}
