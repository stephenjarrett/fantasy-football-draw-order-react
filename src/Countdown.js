import React from 'react'

const Countdown = (props) => {

    return (

        <div className="">
            <div className="countdown">
                <h2>
                    Final Countdown: 
                    <br/>
                    {props.count}
                </h2>
            </div>
        </div>
    );

}

export default Countdown;