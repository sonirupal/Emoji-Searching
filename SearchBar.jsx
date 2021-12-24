import React  from "react";
import "./App.css";
import emojiArray from "./emojiArray";

// console.log(DataList);

 function search(key){
    console.warn(key);
    let length=key.length;
    emojiArray.forEach(element=>{
       let slicedElement=element.name.slice(0,length);
       slicedElement=slicedElement.toLowerCase();
       let v=false;
        if(key==slicedElement){
            let show=document.getElementById("show");
            show.innerText=element.name + element.value;
           v=true;
        }
        if(v==true){
            return;
        }
    })
    

    
   
  }

function SearchBar(){
    return(
        <div>
            <input id="searchBar" onInput={e=>search(e.target.value)} placeholder="search emojis" ></input>
        </div>
    );
}

export default SearchBar;