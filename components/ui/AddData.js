import React from 'react';

function AddData() {
    const alertName = () => {
        alert(' John Doe ');
    };

    return (
        <div>
        <h3> This is a Functional Component </h3>
    <button onClick={alertName}> Alert </button>
        </div>
);
};

export default AddData;