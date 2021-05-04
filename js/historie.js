const events = [
    {
        "year": "1798",
        "event": "Objevení Nauru",
        "detail": "V roce 1798 se britský námořní kapitán John Fearn na své obchodní lodi Hunter (300 tun) stal prvním obyvatelem Západu, který nahlásil pozorování Nauru a kvůli svému atraktivnímu vzhledu jej nazval „Příjemný ostrov“. Od nejméně roku 1826 měli Nauruané pravidelný kontakt s Evropany na velrybářských a obchodních lodích, kteří požadovali provizi a čerstvou pitnou vodu. Poslední velrybář, který zavolal ve věku plachty, navštívil v roce 1904.",
        "evaluation": "true"
    },
    {
        "year": "1878 - 1888",
        "event": "Nauruanská Občanská Válka",
        "detail": "Nauruanská občanská válka byla vedena v letech 1878 až 1888 mezi silami loajálními úřadujícímu králi Aweidovi z Nauru a těmi, kteří se ho snažili sesadit ve prospěch konkurenčního žadatele. Válce předcházelo zavedení střelných zbraní do Nauru. Po většinu války se loajalisté a rebelové dostali do patové situace, přičemž jedna strana ovládala sever a druhá jih. V roce 1888 zasáhlo německé impérium obnovením Aweidy na trůn a převzetím střelných zbraní bojovníků (v době, kdy Němci skončili, zabavili Němci 791 pušek Nauruanům, což byla téměř jedna zbraň pro každého obyvatele ostrova). V průběhu války ztratilo Nauru asi 500 lidí, třetinu předválečné populace.",
        "evaluation": "false"
    },
    {
        "year": "1900",
        "event": "Fosfátová Naleziště",
        "detail": "Fosfát objevil na Nauru v roce 1900 prospektor Albert Fuller Ellis. Pacifická fosfátová společnost začala využívat rezervy v roce 1906 na základě dohody s Německem a svou první zásilku vyvážela v roce 1907. V roce 1914, po vypuknutí první světové války, byl Nauru zajat australskými jednotkami. V roce 1919 bylo spojeneckými a sdruženými mocnostmi dohodnuto, že jeho britským veličenstvím by měl být řídící orgán v rámci mandátu Společnosti národů. Dohoda o ostrově Nauru uzavřená v roce 1919 mezi vládami Spojeného království, Austrálie a Nového Zélandu stanovila správu ostrova a těžbu fosfátových ložisek mezivládní Britskou komisí pro fosfáty (BPC). Podmínky mandátu Společnosti národů byly vypracovány v roce 1920.",
        "evaluation": "true"
    },
    {
        "year": "1920",
        "event": "Španělská Chřipka",
        "detail": "Ostrov zažil chřipkovou epidemii v roce 1920, s mírou úmrtnosti 18% mezi původními Nauruany.",
        "evaluation": "true"
    },
    {
        "year": "1942, 1943",
        "event": "Okupace a Bombardování",
        "detail": "Japonská vojska obsadila Nauru dne 25. srpna 1942. Japonci postavili přistávací plochu, která byla poprvé bombardována 25. března 1943, čímž zabránila leteckému zásobování potravinami na Nauru.",
        "evaluation": "true"
    },
    {
        "year": "1966, 1968",
        "event": "Osamostatnění",
        "detail": "Nauru se stal samosprávou v lednu 1966 a po dvouletém ústavním shromáždění se dne 31. ledna 1968 osamostatnil pod zakládajícím prezidentem Hammerem DeRoburtem.",
        "evaluation": "true"
    },
    
    
];


const heroes = [
    {
        "name": "John Fearn",
        "birth": "24.8.1768",
        "death": "xxx",
        "biography": "John Fearn (1768–1837) byl důstojník britského královského námořnictva, námořní kapitán a objevitel. Je známý jako první Evropan, který vstoupil na půdu pacifického ostrova Nauru, který je nyní nezávislou republikou.",
        "portraits": [
            
        ],
        "online": "https://en.wikipedia.org/wiki/John_Fearn_(whaler)"
    },
    {
        "name": "Král Aweida",
        "birth": "7.3.1850",
        "death": "14.9.1937",
        "biography": "Před tím, než se Nauru dostalo pod evropskou vládu, vládl nad ním král, který vytvářel zákony, které prosazovaly místní náčelníci. Když Německo připojilo Nauru k německé Nové Guineji, Aweida si zachoval svou suverenitu jako král a zůstal náčelníkem nauruanského lidu, i když se o něm ví jen velmi málo. Aweijeda se narodil náčelníkovi Jimovi a jeho manželce Eidingab z kmene Emea. Jeho první manželství bylo s dcerou náčelníka Eibinua z kmene Eamwitů z vesnice Bush. Měli několik dětí. Poté, co Eibinua zemřela, se Aweijeda znovu oženil, tentokrát s Eidukiri, také z kmene Eamwit, ale neměli žádné děti.",
        "portraits": [
            "Aweida.jpg",
        ],
        "online": "https://en.wikipedia.org/wiki/Aweida"
    },
    {
        "name": "Sir Albert Ellis",
        "birth": "28.8.1869",
        "death": "11.7.1951",
        "biography": "Sir Albert Fuller Ellis CMG (28. srpna 1869 - 11. července 1951) byl prospektor v Pacifiku. V roce 1900 objevil ložiska fosfátů na tichomořských ostrovech Nauru a Banaba (oceánský ostrov). V letech 1921 až 1951 byl britským komisařem pro fosfáty na Novém Zélandu.",
        "portraits": [
            "Albert.jpg",
        ],
        "online": "https://en.wikipedia.org/wiki/Albert_Ellis_(prospector)"
    }, 
    {
        "name": "Hammer DeRoburt",
        "birth": "25.10.1922",
        "death": "15.7.1992",
        "biography": "Sir Hammer DeRoburt OBE GCMG (25. září 1922 - 15. července 1992) byl zakládajícím prezidentem republiky Nauru a vládl zemi po většinu prvních dvaceti let nezávislosti.",
        "portraits": [
            "Hammer.jpg",
        ],
        "online": "https://en.wikipedia.org/wiki/Hammer_DeRoburt"
    }, 
];



$(function () {
    $("h2").on("click", function () {
        $(this).parents(".row").next().toggle(1000);
    });
    events.forEach((event) => {
        $("#udalosti tbody").append(`<tr>
            <td class="event-year">${event.year}</td>
            <td>
              <p class="event-name"><i class="fas fa-chevron-down"></i> <a><b>${event.event}</b></a></p>
              <p class="event-detail">${event.detail}</p>
            </td>            
            <td class="event-evaluation">${(event.evaluation == "true") ? '<i class="fas fa-plus-circle text-success"></i>' : '<i class="fas fa-minus-circle text-danger"></i>'}</td>
        </tr>`);
    });
    $(".event-detail").hide();
    $(".event-name i, .event-name a").on("click", function () {
        $("#udalosti tr").removeClass;
        $(this).parents("tr").addClass;
        $(".event-detail").hide(250);
        $(this).parent().next().toggle();
    });
    heroes.forEach((hero) => {
        $("#postavy .list-group").append(`<li class="list-group-item list-group-item-action list-group-item-primary">${hero.name}</li>`);
    });
    function fillPersonCard(person) {
        let hero = heroes.find(item => { return item.name === person });
        $(".card-header").html(`<i class="fas fa-star-of-life"></i> <b>${hero.birth}</b> - <i class="fas fa-cross"></i> <b>${hero.death}</b>`);
        $(".card-title").text(hero.name);
        $(".card-text").text(hero.biography);
        $(".card-footer").html(`Odkaz: <a href="${hero.online}">${hero.online}</a>`);
        $(".gallery").empty();
        for (let i = 0; i < hero.portraits.length; i++) {
            $(".gallery").append(`<div class="col-sm-4"><a href="#"><img src="historie/images/${hero.portraits[i]}" alt="" class="img-fluid"></a></div>`);
        }
    }


    $("#postavy li:first").addClass('active');

    fillPersonCard(heroes[0].name);


    $("#postavy li").on("click", function () {

        $("#postavy li").removeClass("active");

        $(this).addClass("active");

        let person = $(this).text();

        $("#portret").slideUp(1000, function () {

            fillPersonCard(person);
        });

        $("#portret").slideDown(1000);
    });



    let timer = 0;
    window.setInterval(() => {
        timer++;
        $("article figure img").each(function (index, value) {
            $(value)
                .fadeOut(500, function () { $(value).attr("src", "images/" + articles[index].gallery[timer % articles[index].gallery.length]) })
                .fadeIn(500);
        });
    }, 5000);
})