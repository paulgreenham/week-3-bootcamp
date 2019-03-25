//Handlebars lesson spot checks

// const items = [
//     { item: "cheese", price: 15 },
//     { item: "arak", price: 68 },
//     { item: "hummus", price: 15 },
//     { item: "pita", price: 5 }
// ]

// // Write a for loop here that loops through
// // the items array, creates a template for each
// // item, and appends it to the items div.

// let source = $("#store-template").html()
// let template = Handlebars.compile(source)

// for(let item of items){
//     let newHTML = template(item)
//     $(".items").append(newHTML)
// }


// const classData = {
//     classmates: [
//         {name: "That on gal", description: "Always has the ansswer"},
//         {name: "The weird dude", description: "Quick with a smile"},
//         {name: "Taylor", description: "Just Taylor"}
//     ]
// }

// const source = $("#class-template").html()
// const template = Handlebars.compile(source)
// $("#main-container").append(template(classData))


// var menuData = {
//     menu: [
//         { name: "Google", link: "http://google.com", socialNetwork: false },
//         { name: "Facebook", link: "http://facebook.com", socialNetwork: true },
//         { name: "Instagram", link: "http://nstagram.com", socialNetwork: true },
//         { name: "Twitter", link: "http://twitter.com", socialNetwork: true },
//     ]
// }

// var source = $('#menu-template').html()
// var template = Handlebars.compile(source)
// var newHTML = template(menuData)

// $('.menu').append(newHTML)


const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]

const source = $("#first-template").html()
const template = Handlebars.compile(source)
$("#main-container").append(template({animals}))

const source2 = $("#second-template").html()
const template2 = Handlebars.compile(source2)
$("#main-container").append(template2({languages}))
