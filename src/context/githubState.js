import React, { useReducer } from "react";
import GithubReducer from "./githubReducer";
import GithubContex from "./githubContext";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, [initialState]);

  const searchUsers = (keyword) => {
    setloading();
    setTimeout(() => {
      axios
        .get(`https://api.github.com/search/users?q=${keyword}`)
        .then((res) => {
           dispatch({
               type:"SEARCH_USER",
               payload: res.data.items
           })
        });
    }, 1000);
  };

  const setloading = () =>{
      dispatch({type: "SET_LOADING"})
  }
   
  return (
    <GithubContex.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers
      }}
    >
      {props.children}
    </GithubContex.Provider>
  );
};

export default GithubState;
