$(function(){
    let mesta = [];

    fetch('/towns.json')
    .then(response => {
    return response.json();
    })
    .then(json =>{
    mesta = json;
    })
    .catch(function(error){
    console.error('Chyba: \n', error);
    });


    let poi = [];
    fetch('http://localhost:8080/api/town')
    .then(response => { return response.json() })
    .then(json => { poi = json; })
    .catch(function (error) { console.error('Error: \n', error); });
    

        let lastfill = $("svg").attr('fill');
        $("path").on('click', function(){ //on click on path
            if(lastfill == 'rgb(0, 44, 126)') { //if lastfill is yellow
                $(this).css({'fill':'rgb(255, 215, 0)'}); //set the color to black
                lastfill = "#7c7c7c"; //set lastfill to grey
            } else {
                $("path").css('fill', $("svg").attr('fill')); //revert all to grey
                $(this).css({'fill':'rgb(0, 44, 126)'}); //set current to yellow
                lastfill = "rgb(0, 44, 126)"; //set last fill to yellow
                $("h1").html($(this).attr('name')); //set h1 to name of path
            }
        });
        $("path").on('mouseover', function(){ //on mouse over on path
            lastfill = $(this).css('fill');
            if(lastfill == 'rgb(0, 44, 126)') { //if lastfill is yellow
                $(this).css({'fill':'rgb(0, 44, 126)'}); //set path to blackish yellow
            } else {
                $(this).css({'fill':'rgb(255, 215, 0)'}); //set path to black
            }
        });
        $("path").on('mouseout', function(){ //on mouse out on path set previous color
            $(this).css({'fill':lastfill});
        });
    

    $("rect").on('click', function(){ //on click on rect
        if(lastfill == 'rgb(0, 44, 126)') { //if lastfill is yellow
            $(this).css({'fill':'rgb(255, 215, 0)'}); //set the color to black
            lastfill = "rgb(0, 44, 126)"; //set lastfill to grey
        } else {
            $(this).css({'fill':'rgb(0, 44, 126)'}); //set current to yellow
            lastfill = "rgb(0, 44, 126)"; //set last fill to yellow
            $("h1").html($(this).attr('name')); //set h1 to name of rect
        }
    });
    $("rect").on('mouseover', function(){ //on mouse over on rect
        lastfill = $(this).css('fill');
        if(lastfill == 'rgb(0, 44, 126)') { //if lastfill is yellow
            $(this).css({'fill':'rgb(0, 44, 126)'}); //set rect to blackish yellow
        } else {
            $(this).css({'fill':'rgb(255, 215, 0)'}); //set rect to black
        }
    });
    $("rect").on('mouseout', function(){ //on mouse out on rect set previous color
        $(this).css({'fill':lastfill});
});

$("rect").on('click', function() { 
    let id = $(this).attr('id');
    let mesto = mesta.find(item => {return item.id == id});
    $('#towninfo').slideUp(700, function(){$('#towninfo').html(`<div class="container border mt-3 mb-3" ><h3>${mesto.city}</h3> Počet obyvatel: ${new Intl.NumberFormat('cs-CS').format(mesto.population)}<hr><p>${mesto.text}</p><img src="img/${mesto.sign}" style="height: 350px;"/></div`)});
    $('#towninfo').slideToggle(600);
});

});
