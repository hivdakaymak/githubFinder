import React, { useReducer } from "react";
import alertReducer from "./alertReducer";
import alertContex from "./alertContext";


const alertState = (props) => {
  const initialState = null

  const [state, dispatch] = useReducer(alertReducer, [initialState]);

  const setAlert = (msg,type) =>{
    dispatch({
      type: "SET_ALERT",
      payload: {msg, type}
    })

    setTimeout(() =>{
      dispatch({type: "REMOVE_ALERT"})
    },3000)

  }

  return (
    <alertContex.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {props.children}
    </alertContex.Provider>
  );
};

export default alertState;
