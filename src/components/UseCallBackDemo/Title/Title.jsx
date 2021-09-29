import React, { useState } from 'react';

const Title = () => {
    console.log('rendering title')
    return(
        <h2>
            useCallBackDemo
        </h2>
    )
}

export default React.memo(Title) 