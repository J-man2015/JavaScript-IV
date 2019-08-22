// CODE here for your Lambda Classes
class Person{
    constructor(object){
  this.age= object.age;
  this.name=object.name;
  this.location=object.location;
    }
    speak= function(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}


class Student extends Person{
    constructor(object){
        super(object);
        this.previousbackground=object.previousbackground;
        this.classname=object.classname;
        this.favsubject=object.favsubject;
        this.grade=object.grade;
    }
    listsubjects= function(){
        console.log(this.favsubject.join());
    }
    prAssignments= function(subject){
        console.log(`${this.name} has submmited a PR for ${subject}!`)
    }
    sprintchallenge=function(subject){
        console.log(` ${this.name} has begun sprint challenge for ${subject}`)
    }
    graduate= function(object){
        if(`${object.grade}` > 70){
            console.log("Man You Smart, You Pass!")
        }else{
            console.log("Shit, you fail. Better luck next time")
        }
    }
}

const johnny= new Student({
    age:45,
    name: "Johnny",
    location: "Brooklyn",
    previousbackground: "Warehouse Worker",
    classname: "And 12",
    favsubject: ["Politics","Math","Roman History"],
    grade:92,
});

const maria= new Student({
    age:16,
    name: "Maria",
    location: "St.Louis",
    previousbackground: "Retail Associate",
    classname: "Web 12",
    favsubject: ["Politics","Math","MUA"],
    grade:85
})

const elizabeth= new Student({
    age:24,
    name: "Elizabeth",
    location: "Staten Island",
    previousbackground: "College Student",
    classname: "DS 12",
    favsubject: ["Biology","Math","Roman History"],
    grade:63
})



class Instructor extends Person{
    constructor(object){
        super(object)       
        this.speciality=object.speciality;
        this.favlanguage=object.favlanguage;
        this.catchphrase=object.catchphrase;
        
    }
    demo= function(subject){
    console.log(`Today ${this.name} we are learning about ${subject}.`)
    }
    grade= function(object,subject){
        console.log(`${object.name} receives a perfect score on ${subject}`)
    }
    // randomgrade= function(object){
    //     // console.log(`${object.grade}` + Math.random())
    // }
}
const jordan= new Instructor({
    age:20,
    name: "Jordan",
    location: "San Diego",
    speciality: "Redux",
    favlanguage: "Python",
    catchphrase: "Hit Me!",
    
});
const mikey= new Instructor({
    age:29,
    name: "Mikey",
    location: "Hollywood",
    speciality: "LESS",
    favlanguage: "Ruby",
    catchphrase: "Eat My Shorts"
})
const julia= new Instructor({
    age:24,
    name: "Julia",
    location: "Lincoln",
    speciality: "SASS",
    favlanguage: "C++",
    catchphrase: "Pour One Out For the Homies"
});


class ProjectManager extends Instructor{
    constructor(object){
        super(object);
        this.gradclassname=object.gradclassname;
        this.favinstructor=object.favinstructor;
    }
    standup= function(slackchannel){
        console.log(`${this.name} announces to ${slackchannel}, at @${slackchannel} time!`)
    };
    debugscode= function(object,subject){
        console.log(`${this.name} debugs ${object.name}'s code on ${subject}`);
    }
    }

    const burt= new ProjectManager({
        age:25,
        name:"Burt",
        location:"Idaho Falls",
        speciality: "React",
       favlanguage:"Javascript",
        catchphrase:"Holy Canoli",
        gradclassname: "Web2",
        favinstructor:"Bill Nye"
    })


console.log(burt);
console.log(burt.standup("Web23_ah"));
console.log(burt.debugscode(julia,"LESS"));
console.log(johnny);
console.log(johnny.listsubjects());
console.log(johnny.prAssignments("LESS"));
console.log(johnny.sprintchallenge("Prototypes"));
console.log(jordan);
console.log(jordan.demo('math'));
console.log(julia);
console.log(jordan.grade(johnny,"preprocessing"))
// console.log(jordan.randomgrade(maria));
console.log(elizabeth.graduate(elizabeth));
console.log(maria.graduate(maria));