import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div><h1>I AM VERGIL</h1>

    
    </div>
    
  );
}



//rules of jsx

//you can add only 1 root element, so put everything
//in a div cuh

//in order to write js in this output we just use {}
//this is similar to 


//we use the .jsx extention


//to add more pages, we need to make a new folder and within it
//we make a new .jsx file to render the whole thing again
//next will make the route on its own, at the end of that file
//we need to export the whole thing, the name of the file
//MUST be page.jsx

//EVERY TAG IN JSX NEEDS TO HAVE A CLOSING TAG OR ELSE WE CRASH


//in the layout.jsx, it is the magic that handles the html injection
//we can add in it a constant string of html, we treat it as
//index.html and also it works in a similar manner to 
//injecting html in a single page approach, it does that for us

//the routing method here is essentially thr file sysrem cuh



//now react comes wiht its own compoents, for example the 
//<Link> tag which is the same as <a> tag BUUUT, Link is better
//because <a> reloads the whole thing WHILE <Link> reloads the part
//that is changed, it does injection instead of reloading the whole
//thing THO u need to import it from react

//how to create a components:

  //create a folder in app
  //these guys are pieces of a page
  //the pages are lowercase names
  //the components are CamelCase
  //once you are done making the code/function
  //you import it to layout
  //you then treat the name of the file of the component
  //just put it as is
  //ex: <NavBar></NavBar>
  //u can nest components no problem






//applying css;
//essentially x.moudle.css is a file css that can be used
//for a specific directory

//global.css needs to be there and be imported if need be



//in js there are a few key words which we need to change here
//for -> htmlfor
//class -> className




//introducing hooks

//we have 2, a usestate and useeffect
//essentially whenver the component becomes an interactable
//it becomes a client component

//but by default the componets and serveside

//the usestate hook is the one mainly responsible for
//listening to events and doing changes