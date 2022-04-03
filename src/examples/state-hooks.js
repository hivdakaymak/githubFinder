import React, { useState } from "react";
import ReactDOM from "react-dom";

// class App extends Compenent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       text: '',
//     };
//   }
//   render() {
//     return (
//       <div>
//         <p>Butona {this.state.count} Kez Tıklandı.</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           +1
//         </button>
//       </div>
//     );
//   }
// }

const App = (props) => {
    const [count, setCount] = useState(props.count);
    const [text, setText] = useState(props.text);
    return (
        <div> 
            <p>Butona {count} Kez Tıklandı.</p>
            <p>Girilen text: {text}</p>

            <button onClick={() => setCount(count+1)}>+1</button>
            <button onClick={() => setCount(count-1)}>-1</button>
            <button onClick={() => setCount(props.count)}>RESET</button>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />


        </div>
    )
}

App.defaultProps = {
    count: 5,
    text: 'defult',
}

ReactDOM.render(<App />, document.getElementById("root"));
