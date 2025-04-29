import React from "react";
import useLocalStorage from "../customHooks/useLocalStorage";
import useGet from "../customHooks/useGet";
import List from "../components/List";
const Home = () => {
   const [name,setName] = useLocalStorage("name", "John Doe");
   const{ data, error, loading} = useGet("https://fakestoreapi.com/products");
   if (loading) return <h1>Loading...</h1>;
   if (error) return <h1>Error: {error.message}</h1>;
   if (!data) return <h1>No data found</h1>;
   

  return <>
   <h1>localstorage name : {name}</h1>;
    <h1>Data from API:</h1>
    <List items={data} />
    <button onClick={() => setName("Jane Doe")}>Change Name</button>
  </>
};

export default Home;
