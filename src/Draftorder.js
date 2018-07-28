import React from 'react'

class Draftorder extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: this.props.count
        };
    }
    
    render() {
        return (
            <div>
                <div>
                    <h2>2018 Fantasy Football Participants:</h2>
                    <ul>
                        {this._drawArrayToScren(this.props.members)}
                    </ul>
                </div>
                <div>
                    <h2>Your 2018 Draft Order:</h2>
                    <ol>
                        {this._drawOrderedArrayToScreen(this.props.members)}
                    </ol>
                </div>
            </div>
        );
    }

    
    _drawArrayToScren = (array) => {
        let staticOrder = array;
        console.log(staticOrder);
        return staticOrder.map(name => {
            return <li key={name} >{name}</li>
        })
    }
    
    
    _drawOrderedArrayToScreen = (a) => {
        if (this.state.count === 0) {

            var array = a.slice();
            let drawOrder = this._shuffle(array);
            return drawOrder.map(name => {
                return <li key={name} >{name}</li>
            })
        }
    }
    
    _shuffle = (array) => {
        var currentIndex = array.length,
        temporaryValue, randomIndex;
        
        
        
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        
        return array;
    }
    
}

    export default Draftorder;