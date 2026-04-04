class genshin_char{
    constructor(name,place,element){
        this.name = name;
        this.place = place;
        this.element = element;
    }

    give_role(){
        this.role = (this.place === "inazuma")? "DPS": "support";
    }
    give_weapon(){
        this.weapon = (this.element === "anemo")? "bow":"claymore";
    }


    get info(){
        return `${this.element}\n${this.name}\n${this.place}\n${this.role}\n${this.weapon}`;
    }

    set info(new_info){
        [this.name, this.place, this.element, this.role, this.weapon] = new_info.split(" ")
    }

}   

// kazuha = new genshin_char("kazuha","inazuma","anemo");
// console.log(kazuha.info);
// kazuha.info = "hutao liway pyrus DPS speer";
// console.log(kazuha.info);


async function test_fetch1(){//assume we are doing get RN
    
    try{
        const res = await fetch("https://recipevault-api.vercel.app/api/recipes");//at this point i am requesting from server
        //a response contains a bunch of data, some of which we dont need, we need just the json
        const data = await res.json(); //this needs await becuase it converts the data essentially
        console.log(data);
        if (!res.ok){throw new Error(`we ran into an error CUH ${res.status}`)};
    
    
    }
    catch(error){
        console.log(`ERROR: ${error}`);
    }


}   

//test_fetch1:

    //essentially utilizes the fetch() method, which assumes get by default

    //the fetch is a promise method, so we need to give it await

    //it returns a response containing headers, the data we need, etc.

    //we use .json() to get the data (this is a whole parsing operation so also await)

    //we check the response, is it ok? then we continue, else we throw a new error and print the status




async function test_fetch2(name, des){
    
    try{

        
    const res = await fetch("https://recipevault-api.vercel.app/api/recipes",
        {method: "Post",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify({
            name: name,
            description: des,
            image: "https://example.com/image.jpg",
            prepTime: 15,
            cookTime: 60,
            servings: 4,
            category: "Main Course",
            cuisine: "japanese",
            difficulty: "Easy",
            ingredients: "noodles, soysauce, miso paste, chicken, veggies"
        })

        }
    )
    if (!res.ok){
        throw new Error(`thank u for running into this error, here it is ${res.status}`);
    }
    const made = await res.json();
    console.log(made);
    }
    catch(error){
        console.log(`error: ${error}`)
    }
    
} 




//essentially whenever i want to do any other operation that isnt get

//i need to pass the URL into fetch, followed by an object containing:

    //method: methodname,  <---- post and such
    //headers: { "Content-Type": "Application/json" }, <-- needed so the server knows what its receiving
    //body:JSON.stringify({ <----- what are we sending? (send it as a string of json)
    //content as object. so key: value

    //afterwards u can use the response.json() to return the created
    //element
    
//)}



async function test_fetch3() {
    try{
        const res = await fetch("https://recipevault-api.vercel.app/api/recipes/1",
            {
                method: "PUT",
                headers: {"Content-Type":"applciation/json"},
                body:
                JSON.stringify({
                    name:"RAMEN PART 2",
                    description: "SOBA + UDON + TAHINE",
                    category: "linguiny",
                    cuisine: "yapanese"
        
                })
                
            });
        
            if (!res.ok){
                throw new Error(`i am the put that is putting, i ran into an error ${res.status}`)
            
            }
            const updated = await res.json();
            console.log(updated,"update done");

    }
    catch (error){
        console.log(`i am the put and i ran into this issue, ${error}`);
    }
    
    
}


//essentially PUT is the exact same as post just, the URL must have
//the ID of the object we are updating, and thats about it

// (upload ur code to check tho)



async function test_fetch4(){
    
    try{
        const res = fetch("https://recipevault-api.vercel.app/api/recipes/1",{
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })
        if (!res.ok){
            throw new Error(`i am the delete and i have failed to delete ${(await res).status}`);
        }
    }
    catch(error){
        console.log(`delete error just dropped ${error}`);
    }
    
}

//so essentially, delete just needs the headers info and thats about it

// test_fetch2("RAMEN","NOODLES+MISO+SHOYOU");
test_fetch1();
test_fetch3();
test_fetch1();