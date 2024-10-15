
$(".axtar").on("click", function(){
    $(".inf").css({
        display:"block"

    })
    var texts=$("input").val()
    var nov=$("select").val()
   
$.ajax(`http://www.omdbapi.com/?apikey=9c74ef1a&t=${texts}&type=${nov}`).then(function(res){
    
    if(res.Response=="False"){
        $(".inf").text("Film tapilmadi").css({
            fontSize:"2em",
        color:"red"})

       
    }
    else{ $(`.film-name`).text(res.Title)
        $(".film-genre").text(res.Genre)
        $(".film-year").text(res.Year)
        $(".film-plot").text(res.Plot)
        $(".film-actors").text(res.Actors)
        $(".film-writer").text(res.Writer)
        $(".film-director").text(res.Director)
        $(".film-country").text(res.Country)
        $(".film-imdbrating").text(res.imdbRating)
        $(".foto").attr("src",res.Poster)
console.log(res)}

}).catch(function(err){
    
    console.log(err)
    
})
})
$(".film").on(`click`,function(e){
   console.log(e.target.dataset.ad)
})
$(".film").on("click", function(e){
    $(".pop-up").css({
        display:"flex",
fontSize:"10px"
    })
    let ad=e.target.dataset.ad
    $.ajax(`http://www.omdbapi.com/?apikey=9c74ef1a&t=${ad}`).then(function(res){
    
         $(`.film-name`).text(res.Title)
            $(".film-genre").text(res.Genre)
            $(".film-year").text(res.Year)
           
            $(".film-actors").text(res.Actors)
            $(".film-writer").text(res.Writer)
            $(".film-director").text(res.Director)
            $(".film-country").text(res.Country)
            $(".sekil").attr("src",res.Poster)
    
    }).catch(function(err){
        
        console.log(err)
        
    })
})
$(".cix").on("click", function(){
    $(".pop-up").css({
        display:"none"

    })
})