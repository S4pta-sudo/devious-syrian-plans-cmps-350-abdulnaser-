let text = {
    name:'hmar',
    age:5,
    elaborate:{
        id:'idk',
        word:'nani',
        huh:'nani2',
        genshin:'kazuha'
    },
    limbus:'DON',
    library:'ROLAND',
    LOB:9

};

// let x = {age,elaborate:{ id }} = text

// console.log(`
//     ${age}\n
//     ${id}
//     ${x}
//     `);

const { name, age, ...remaidner  } = text;

const { name: e, age: g, elaborate: { id: i, ...inner_remainder}, ...remaidner2  } = text;

console.log(`
    ${name} is the same as ${e}\n
    ${age} is ${g}\n
    ${remaidner} is ${remaidner2} but with elaborate in it\n
    ${i} is a subset of ${inner_remainder}
    `);


const {name:test, ...everything} = text;

console.log(everything);




class nigga{

    static stats = 8; 
    #lol;

    constructor(v1,v2,v3){
        this.var1 = v1;
        this.var2 = v2;
        this.var3 = v3;
        this.#lol = Math.random();
    }

    get names(){
        return `${this.var1}\n${this.var2}\n${this.var3}\n${this.#lol}`;
    }

    set names(v123){
        [this.var1,this.var2,this.var3] = v123.split(" ");
    }
}


let n1 = new nigga("naser","fayad","hayawan");

console.log(n1.names);

n1.names = "hand leg thigh";

console.log(n1.names);

console.log(`
    ${nigga.stats}\n${n1.stats} //trying to access smth static give u an undefined result
    `);

const kid = {kind:'man'};
Object.setPrototypeOf(kid, text);
kid.neww = "O REALLY NOW"
text.elaborate.genshin = "FISHLE";
console.log(kid.elaborate.genshin);

const test2 = Object.create(text);
test2.LOB = 847;
console.log(test2.LOB);
console.log(Object.getPrototypeOf(test2).LOB);




const text2 = {

    ...text,
    library:"ANGELA",
    distortion_detetctive: "EZRA"

};


const text3 = Object.assign({},text,text2,{ dmc:"dante", dmc_count:5, age:10 });

console.log(text3);



let op = [1,2,3,4,5,6,8]

let [first,,,forth,...rem] = op;

console.log(rem);
console.log(typeof rem);
