class Animal{
    constructor(name,age){
        this.name = name 
        this.age = age 
    }

    run(){
        console.log("Animal is running")
    
    }
}

let object = new Animal("animalx",4)
object.run()