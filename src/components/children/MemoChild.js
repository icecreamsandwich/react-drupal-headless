import React  from 'react';
const MemoChild = props => {
    console.log("I am rendered");
    return (
        <div>
            <label>And am rendering every {props.seconds} seconds</label>
        
        </div>
    );
};

export default React.memo(MemoChild);

