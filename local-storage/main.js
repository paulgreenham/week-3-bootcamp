const getWisdom = function(){
    return JSON.parse(localStorage.wisdom || `{"sayings": [], "count": 1}`)
}

const wisdom = getWisdom()

const pushWisdomToLS = () => localStorage.wisdom = JSON.stringify(wisdom)

const renderWisdom = function(inputSayings){
    console.log(inputSayings)
    let source = $("#wisdom-template").html()
    let template = Handlebars.compile(source)
    let hbText = template({inputSayings})
    $("#wisdom-container").append(hbText)
}

const even = number => number % 2 == 0


$("#wisdom-button").on("click", function(){
    wisdom.sayings.push({id: wisdom.count, text: $("input").val()})
    wisdom.count++
    if(even(wisdom.sayings.length)){
        pushWisdomToLS()
    }
    $("input").val("")
})

$("#clear").on("click", function(){
    localStorage.removeItem("wisdom")
})

$("#wisdom-container").on("click", ".remove-saying", function(){
    let sayingID = $(this).closest(".saying").data("id")
    console.log(sayingID)
    let sayingIndex = wisdom.sayings.findIndex(s => s.id == sayingID)
    console.log(sayingIndex)
    console.log(localStorage.wisdom.sayings)
    wisdom.sayings.splice(sayingIndex, 1)
    pushWisdomToLS()
    $(this).closest(".saying").remove()
})


renderWisdom(getWisdom().sayings)