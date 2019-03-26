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


//2. + 3.

// const renderQueryString = function(str){
//     newStr = `"`
//     for(let i = 0; i < str.length; i ++){
//         if(str[i] != " "){
//             newStr += str[i]
//         }
//         else{
//             newStr += "+"
//         }
//     }
//     return newStr += `"`
// }

// const formatQueries = function(queryType, queryValue){
//     if(queryType.toLowerCase() === "title"){
//         return {
//             type: "intitle",
//             value: renderQueryString(queryValue)
//         }
//     }
//     else if(queryType.toLowerCase() === "isbn"){
//         return {
//             type: "isbn",
//             value: queryValue
//         }
//     }
// }

// const getBook = function(queryType, queryValue){
//     let query = formatQueries(queryType, queryValue)
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=${query.type}:${query.value}`,
//         success: function (data) {
//             data.items.forEach(d => console.log(`Title: ${
//                 d.volumeInfo.title}, Author(s): ${
//                 d.volumeInfo.authors}, ISBN: ${
//                 d.volumeInfo.industryIdentifiers[0].identifier}`))
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }

// $("button").on("click", function(){
//     getBook($("#query-type").val(), $("#query-value").val())
//     // $("#container").append(`<div>${getBook($("#query-type").val(), $("#query-value").val())}</div>`)
// })


//4. + 5. + GIF Generator Extension

// const displayResults = function(urls){
//     const source = $("#results-template").html()
//     const template = Handlebars.compile(source)
//     const hbText = template({urls})
//     $("#image-container").append(hbText)
// }

// const addFavorite = function(url){
//     const source = $("#favorite-template").html()
//     const template = Handlebars.compile(source)
//     const hbText = template({url})
//     $("#favorites").append(hbText)
// }

// const convertQueryString = function(str){
//         newStr = ""
//         for(let i = 0; i < str.length; i ++){
//             if(str[i] != " "){
//                 newStr += str[i]
//             }
//             else{
//                 newStr += "+"
//             }
//         }
//         return newStr
//     }

// const getGifs = function(queryTerms){
//     $.ajax({
//         method: "GET",
//         url: `http://api.giphy.com/v1/gifs/search?q=${convertQueryString(queryTerms)}&api_key=Cn0UdyG81KmxMaUCm93gc9Tx9cxyNRwp&limit=6`,
//         success: function(data){
//             const embedURLs = data.data.map(d => d.embed_url)
//             displayResults(embedURLs)
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }

// let favoriteGifs = []

// $("#search").on("click", function(){
//     $("#image-container").empty()
//     getGifs($("input").val())
// })

// $("#clear-results").on("click", function(){
//     $("#image-container").empty()
// })

// $("#clear-favorites").on("click", function(){
//     favoriteGifs = []
//     $("#favorites").empty()
// })

// $("#image-container").on("click", ".add", function(){
//     let url = $(this).siblings("iframe").attr("src")
//     favoriteGifs.push(url)
//     $(this).closest("div").remove()
//     addFavorite(url)
// })

// $("#favorites").on("click", ".remove", function(){
//     removeIndex = favoriteGifs.indexOf($(this).siblings("iframe").attr("src"))
//     favoriteGifs.splice(removeIndex, 1)
//     $(this).closest("div").remove()
// })

