//start writing JS code
alert("Welcome to JS class")
var student_1="Z";
var student_2="A";



var welcome_msg = "Hai. We are friends.. " +  student_1 + " , " + student_2
console.log(welcome_msg)

function greet(nameOfPerson) {

    var greeting_message = "Welcome, Mr " + nameOfPerson
    console.log( greeting_message )
}

greet("Bala")

greet("ken")

/*
1. Create a function which takes two inputs (names)
2. Inside that function, concatenate those inputs using + operator
3. Return the resulted string 
4. Call that function, with u and ur friend's name
5. Print the returned result.

------------------------------------------------------
6. Advanced optional
It should look like this.
If i pass "Bala" and "Ken" as inputs to the function, it should return 
"Bala Bala | Ken Ken"

*/

function joinNames( name1, name2 ){
// This function is going to join two names (name1, name2)
// It is going to return the joined_string in the following format
// Returns : "name1 name 2"
    

    //var "space = " "
    var joined_string = name1 + " " + name2
    var advanced_string = name1 + " "+ name1 + " | " + name2 + " " + name2
    return advanced_string
}


console.log(joinNames("Bala", "Ken"))

