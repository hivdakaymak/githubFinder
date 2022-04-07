import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

// class App extends Compenent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       text: '',
//     };
//   }

//   compenentDidMount(){

//   }

//   compenentDidUpdated(){

// }

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

    useEffect(()=>{
        console.log("text")
    },[text])
    
    useEffect(()=>{
        console.log("count")
        localStorage.setItem('count', count)
    },[count])

    useEffect(()=>{
        console.log("CompenentDidMounth")
        const countData = localStorage.getItem('count');
        if(count){
            setCount(Number(countData))
        }
    },[])

    useEffect(()=>{
        console.log("CompenentDidMounth- CompenentUpdatedMounth")
    })
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
