//AJAX and APIs lesson spot checks

// $.get("https://www.googleapis.com/books/v1/volumes?q=title:Name+of+the+Wind", function(result){
//     console.log(result.items[0].volumeInfo.description)
// })


// $.get("https://jsonplaceholder.typicode.com/users", function(users){
//     console.log(users[users.length - 1].company.catchPhrase)
// })


// const useData = function(data){
//     console.log(data)
// }

// $.ajax({
//     method: "GET",
//     url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//     success: useData
//   })


// let getBook = function(){
//     $.ajax({
//         method: "GET",
//         url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//         success: function (data) {
//             console.log(data)
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }




//Exercises

//1.

// const getBook = function(isbn){
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
//         success: function (data) {
//             console.log(data)
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }

// $("button").on("click", function(){
//     getBook($("input").val())
// })


//2.

