//question 1 object values

let person = {
    firstname: "Niel",
    lastname: "Armstrong",
    year: 1969,
    occupation: "astronaut"

};
console.log(`${person.firstname} ${person.lastname} was an ${person.occupation}.`);



class Greeting{
    constructor(name,place){
        this.name = name;
        this.place = place;
    }
    hello(){
        console.log(`Hello,${this.name} from ${this.place}!`);
    }
   //Question 2 Instance of  Class  !!!!!!!!!!!
}
let greeting = new Greeting ("Jennifer","NY");
greeting.hello();
// Using code above,
//Create another instance of Greeting called myGreeting with your name and location as the arguments
//Invoke the hello method with the myGreeting instance
//A greeting should print to the console
//Below code what is needed to do this.......
let myGreeting = new Greeting("Nereida","FL");
myGreeting.hello();

//Quetion 3//Instance of a Class
class Book {
    constructor(title, author){
        this.title = title;
        this.author = author;

    }
    describe(){ //this is the method
        return `${this.title} was writtten by ${this.author}.`;
    }
}
//Use code above
//Create a new instance of a book called 'myBook' (see "new" keyword)
//Use "Pride and Prejudice" and "Jane Austen" as the arguments
//Using myBook, print just the title of the book to the console,(see "this" keyword)
//Now print the author of the book to the console
//Invoke the describe method for the my Book instance. Surround with console.log to print to the console.
//Create an new instance of book called 'YourBook' with a title and author of your choosing
// Invoke the describe method for the yourBook instance. Make it print to the console also
//My code below for the code for this
let myBook = new Book("Pride and Prejudice","Jane Austen");
console.log(myBook.title);
console.log(myBook.author);
console.log(myBook.describe());
let yourBook = new Book("Hamlet","William Shakespeare");
console.log(yourBook.describe());

//Question 4 Create a Class
//Create a fruit class with a constructor that has the properties of name, color and taste
//Create a method inside of Fruit that prints a description of the fruit to the console.
//Create an instance of Fruit called fruit2 with arguments banana, yellow, and sweet
//Invoke the describe method for both instances of Fruit, fruit1 and fruit2
//My Code below
class Fruit{
    constructor(name,color,taste){
        this.name = name;
        this.color = color;
        this.taste = taste;

    }
    describe(){
        console.log(`A ${this.name} is{this.color}and has a ${this.taste} taste`)
    
    }
}
let fruit1 = new Fruit("lime","green","sour");
let fruit2 = new Fruit("banana","yellow","sweet");
fruit1.describe();
fruit2.describe();

//question 5 Inheritance and Polymorphism
//Using Code below answer questions
class Person{
    constructor(name,role){
        this.name = name;
        this.role
    }
    introduction(){
        return `Hi, my name is ${this.name}.`
    }
    details(){
        return 'I work as a ${this.role}.'
    }

}
class Student extends Person{
    constructor(name,role){
        super(name,role);
    }
    details(){
        return `I am a ${this.role}.`
    }
}
class Teacher extends Person{
    constructor(name,role){
        super(name,role);
    }
}
//Step 1. Instantiate a new student called student with arguments of "Jacky" and "Student"
//Step 2. Instantiate a new teacher callsed teacher with arguments of "Mr. Bean" and "Teacher"
//Step 3. Call the instroduction method on your new student instance And the details, make sure the results are printed to the console.
//Step 4. Call the introduction method on your new teacher And the details method, make sure that the results are printed to the console

//My code below
let student = new Student("Jacky", "student");
let teacher = new Teacher("Mr. Bean","teacher");
console.log(student.introduction());
console.log(student.details());
console.log(teacher.introduction());
console.log(teacher.details());
//Question 6 Inheritance
//provided code below:

class Parent{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    details(){
        console.log(`${this.name} Addams is ${this.age} years old.`)
    }
}
    //Create a subclass called child that inherits the name age properties from the parent super class
    //Create an instance of the child class called child with arguments "Pugsley" and 10
    //Invoke the details method using the instance child
    //Hint You should be using vital key terms like extends and super

    class Child extends Parent{
        constructor(name,age){
            super(name,age);
        }
}
    let child = new Child("Pugsley",10);
    
    child.details();
//Question 7 Put it all together 

//Step 1. Create a class called Movie with a constructor that takes in a title and director.
//Step 2. Create a method inside of movie called "describe" that returns the following sentence (make sure to fill in the title and director programatically): ""The movie [movie name here]
//was directed by [director name here].
//Step 3. Create another class called list with a constructor that is an empty array called movies
//Step 4. Create a method called addMovie inside of List that will recieve a movie as a paramater and add it to the movies array
//Step 5. Create another method called displayMovies in the list class that will return all of the movie titles and directors using a for loop
//Step 6 Create two instances of Movie called movie1, use "Jurassic Park" and "Steven Spielberg"as its
//arguments And movie2, use "How the Grinch stole Christmas" adn "Ron Howard" as its arguments
//Step 7 Invoke the describe method on movie2, make sure it prints to the console
//Step 9 Create an isntance of List called list and add movie1 and movie2 to the movies array
//Step 10 Display the movies information to the console, using the new intance list
//My code goes here

class Movie{ //Step1
    constructor(title,director){
        this.title = title;
        this.director = director;
    }
    describe(){//step 2
        return `The movie ${this.title} was directed by ${this.director}.`
    }
}
class list{
    constructor() {
    this.movies  = []; //step 3

}

addMovie(movie) {
    this.movies.push(movie);//step 4
}

displayMovies(){
    let movieInfo = "";//Step 5

    for(let i = 0; i < this.movies.length; i++){
        movieInfo +=  `${this.movies[i].title}, directed by ${this.movie[i].director}\n`;
    }

    return movieInfo;
}

}

let movie1 = new Movie("Jurassic Park", "Steven Spielberg");//step 6, instances

let movie2 = new Movie("How the Grinch stole Christmas","Ron Howard");
console.log(movie1.describe());
console.log(movie2.describe());

