import React from "react";


const App = (props) => {
    return React.createElement('div', null, 
        React.createElement('h1', null, 'Hello, ' + props.name + '!'),
        React.createElement('p', null, 'This is server-side rendered content.')
    );
}


export default App;