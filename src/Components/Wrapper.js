// wrapper를 만든다. 
import React from 'react'
function Wrapper({children}){ // 무조건 children 이어야 한다. 
    const style = {
        border:'2px solid black',
        padding: 16
    };

    return(
        <div style={style}>{children}</div>
    );

}

export default Wrapper