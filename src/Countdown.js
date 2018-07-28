import React from 'react'

const Countdown = (props) => {

    return (
        <div>
            <h2>
                Final Countdown:
            </h2>
            <h2>{props.count}</h2>
        </div>
    );

}

// Used like so
// var arr = [2, 11, 37, 42];
// arr = shuffle(arr);
// console.log(arr);

export default Countdown;