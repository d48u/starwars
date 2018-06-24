import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class StarWarsCharacter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            character: []
        }
    }

    componentDidMount() {
        fetch('https://swapi.co/api/people/')
                .then(results => {
                    return results.json();
                })
                .then(data => {

                    let character = data.results.map((mark) => {
                        return (
                        
                        
                        <tr>
                    <td>{ mark.name }</td>
                    <td>{ mark.height }</td>
                    <td>{ mark.mass }</td>
                    <td>{ mark.hair_color }</td>
                    <td>{ mark.skin_color }</td>
                    <td>{ mark.eye_color }</td>
                    <td>{ mark.birth_year }</td>
                    <td>{ mark.gender }</td>
                    <td><a href="{ mark.homeworld }">API URL</a></td>
                    <td><a href="{ mark.films }">API URL</a></td>
                    <td><a href="{ mark.species }">API URL</a></td>
                    <td><a href="{ mark.vehicles }">API URL</a></td>
                    <td><a href="{ mark.starships }">API URL</a></td>   
                    <td>{ mark.created }</td>  
                    <td>{ mark.edited }</td>
                    <td><a href="{ mark.url }">API URL</a></td>       
                            
                                                            
                                                    
                </tr>


                                )
                    })
                    
                    this.setState({character: character});
                });
    }

    render() {
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
                        { this.state.character }
                    </tbody>
                </table>
                
                
                                
                
                
                
                            </div>
                        </div>
                    </div>
                </div>
                );
    }
}

if (document.getElementById('starwarscharacter')) {
    ReactDOM.render(<StarWarsCharacter />, document.getElementById('starwarscharacter'));
}
