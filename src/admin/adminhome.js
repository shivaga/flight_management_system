import React from 'react';

const img_prop={
    maxWidth:'400px',
    textAlign:'center'
}
function Adminhome(){
    return (
        <div>
        <h2>Hi this is the admin side</h2>
        <img style={img_prop} src="https://static.vecteezy.com/system/resources/previews/029/269/933/original/i-am-currently-under-construction-vector.jpg"
            alt="Site construction warning"
        />
        </div>
    )
}

export default Adminhome;