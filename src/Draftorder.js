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
            <div className="draft-container">
                <div className="draft-container1">
                    <h2>2018 Fantasy Football Participants:</h2>
                    <div className="participants">
                        {this._drawArrayToScren(this.props.members)}
                    </div>
                </div>
                <div className="draft-container2">
                    <h2>Your 2018 Draft Order:</h2>
                    <div className="participants">
                        {this._drawOrderedArrayToScreen(this.props.members)}
                    </div>
                </div>
            </div>
        );
    }

    
    _drawArrayToScren = (array) => {
        let staticOrder = array;
        // console.log(staticOrder);
        return staticOrder.map(name => {
            return (
                <div className="participant" key={name} onClick={ () => {this.props.doClick(name)}} >
                    <span className="participant1">
                        {name}
                    </span>
                </div>
            )
        })
    }
    
    
    _drawOrderedArrayToScreen = (a) => {
        var array = a.slice();
        let drawOrder = this._shuffle(array);
        return drawOrder.map((name,index) => {
            return (
            <div className="participant" key={name}>
                <div className="index">
                    {index + 1 + '.'}
                </div> 
                <div className="participant-name">
                    {name}
                </div>    
            </div>
            )
        })
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