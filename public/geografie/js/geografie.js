$(document).ready(function(){
    let kraje = [];
    let mesta = [];

    fetch('../geografie/data/kraje.json')
    .then(response => {
    return response.json();
    })
    .then(json =>{
    kraje = json;
    })
    .catch(function(error){
    console.error('Chyba: \n', error);
    });

    fetch('../geografie/data/mesta.json')
    .then(response => {
    return response.json();
    })
    .then(json =>{
    mesta = json;
    })
    .catch(function(error){
    console.error('Chyba: \n', error);
    });


    

        let lastfill = $("svg").attr('fill');
        $("path").on('click', function(){ //on click on path
            let id =  $(this).attr('id');
            console.log(id);
            let kraj = kraje.find(item => {return item.id == id});
            console.log(kraj);
            $("#infokraj").html(`<div class = "row">
            <div class = "col-12">
                <h2 class = "text-center py-1">${kraj.region}</h2>
            </div>
        </div>
        <div class = "row">
            <div class = "col-8 pt-2">
                <p style = "font-size:1.5em;" class = "pl-4">Populace: <strong>${kraj.population}</strong></p>
            </div>
        </div>
        <div class = "row">
            <figure class = "text-center col-12">
                <figcaption class = "pt-1" style = "font-size:1.2em;"><b><i>${kraj.text}</i></b></figure>
            </figure>
        </div>`)
            if(lastfill == 'rgb(0, 44, 126)') { //if lastfill is yellow
                $(this).css({'fill':'rgb(255, 215, 0)'}); //set the color to black
                lastfill = "#7c7c7c"; //set lastfill to grey
            } else {
                $("path").css('fill', $("svg").attr('fill')); //revert all to grey
                $(this).css({'fill':'rgb(0, 44, 126)'}); //set current to yellow
                lastfill = "rgb(0, 44, 126)"; //set last fill to yellow
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
        let id =  $(this).attr('id');
        console.log(id);
        let mesto = mesta.find(item => {return item.id == id});
        console.log(mesto);
        $("#infokraj").html(`<div class = "row">
        <div class = "col-12">
            <h2 class = "text-center py-1">${mesto.region}</h2>
        </div>
    </div>
    <div class = "img-fluid m-auto col-4">
            <figure class = "text-center">
                    <img src = "img/${mesto.sign}" class="img-fluid m-auto" style = "height:250px">
                    <figcaption class = "pt-1"><strong>Obrázek z Města</strong></figcaption>
                </figure>
            </div>
    <div class = "row">
        <figure class = "text-center col-12">
            <figcaption class = "pt-1" style = "font-size:1.2em;"><b><i>${mesto.text}</i></b></figure>
        </figure>
    </div>`)
        if(lastfill == 'rgb(0, 44, 126)') { //if lastfill is yellow
            $(this).css({'fill':'rgb(255, 215, 0)'}); //set the color to black
            lastfill = "rgb(0, 44, 126)"; //set lastfill to grey
        } else {
            $(this).css({'fill':'rgb(0, 44, 126)'}); //set current to yellow
            lastfill = "rgb(0, 44, 126)"; //set last fill to yellow
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


});
