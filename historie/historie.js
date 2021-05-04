const events = [
    {
        "year": "863",
        "event": "Příchod Byzantské křtící mise s Cyrilem a Metodějem",
        "detail": "V roce 863 přišla na Moravu z tehdy byzantské Soluně křesťanská misie Konstantina-Cyrila a Metoděje, kteří vytvořili nejstarší slovanské písmo hlaholici, vytvořili staroslověnský jazyk (první spisovný slovanský jazyk vůbec), založili na našem území tradici písemnictví a vzdělanosti (Proglas) a šířili křesťanství. Metoděj se později stal fakticky prvním moravským biskupem. Velkomoravská říše se tak stala nezávislou na zahraniční církevní hierarchii.",
        "url": "https://cs.wikipedia.org/wiki/Cyril_a_Metod%C4%9Bj",
        "evaluation": "true"
    },
    {
        "year": "995",
        "event": "Vyvraždění Slavníkovců",
        "detail": "Vyvraždění Slavníkovců byl násilný akt, při němž čeští velmožové 28. září 995 povraždili v Libici členy významného rodu Slavníkovců. 28. září 995 slavil rod Slavníkovců na svém hradě v Libici významný svátek, den svatého Václava. Ten byl přesně před 60 lety zavražděn ve Staré Boleslavi. Během této oslavy na hrad vtrhli čeští velmožové a v okolí kostela povraždili všechny jeho přítomné členy. Krveprolití přežil ze Slavníkovců jen Soběslav, Vojtěch, který zrovna podruhé odešel z Čech, do kterých se už nevrátil a zanevřel na ně,[3] a jejich nevlastní bratr Radim.",
        "url": "https://cs.wikipedia.org/wiki/Vyvra%C5%BEd%C4%9Bn%C3%AD_Slavn%C3%ADkovc%C5%AF",
        "evaluation": "false"
    },
    {
        "year": "1212",
        "event": "Zlatá bula sicilská",
        "detail": "České knížectví se roku 1198 stalo definitivně dědičným královstvím s rozsáhlými privilegii v rámci říše a pravomocemi vládnoucího panovníka. Zlatá bula sicilská roku 1212 potvrdila Přemyslu Otakarovi I. dědičnou královskou hodnost a další privilegia Českého království. Český panovník měl být napříště osvobozen od všech povinností vůči Svaté říši římské až na účast na říšských sněmech.",
        "url": "https://cs.wikipedia.org/wiki/Zlat%C3%A1_bula_sicilsk%C3%A1",
        "evaluation": "true"
    },
    {
        "year": "1278",
        "event": "Bitva na Moravském poli",
        "detail": "Bitva na Moravském poli byla svedena 26. srpna 1278 (na den sv. Rufa) v odpoledních hodinách na pravém břehu řeky Moravy mezi vesnicemi Dürnkrut (Suché Kruty) a Jedenspeigen, ležícími v Dolních Rakousích 30 km jižně od Břeclavi. V boji proti sobě stanula spojená vojska římského krále Rudolfa I. Habsburského a uherského krále Ladislava IV. Kumána proti vojsku českého krále Přemysla Otakara II. a jeho spojenců. Bitvy se účastnilo dohromady asi 55 000 mužů (přesné počty nejsou známy) a jejich střet trval přibližně tři hodiny. Česká vojska byla poražena a král Přemysl Otakar II. byl zabit.",
        "url": "https://cs.wikipedia.org/wiki/Bitva_na_Moravsk%C3%A9m_poli",
        "evaluation": "false"
    },
    {
        "year": "1310",
        "event": "Nástup Lucemburků na český trůn",
        "detail": "Přemyslovci vymřeli po meči zavražděním Václava III. za nevyjasněných okolností 4. srpna 1306. V roce 1310 nastoupil na český trůn po čtyřletých bojích o následnictví Jan Lucemburský, který se oženil s Eliškou Přemyslovnou, dcerou krále Václava II. Jan Lucemburský byl proslavený válečník a politik evropského formátu, kterému se podařilo zvětšit České království mj. získáním Chebska a Horní Lužice. V minulosti byl Jan někdy nazýván \"král-cizinec\". To proto, že Jan nebyl schopen prosadit silnější pozici krále proti vůli českého panstva a vcelku logicky se tak soustředil na evropskou politiku, která skýtala vyšší výnosy a rytířský život.",
        "url": "https://cs.wikipedia.org/wiki/N%C3%A1stup_Lucemburk%C5%AF_na_%C4%8Desk%C3%BD_tr%C5%AFn",
        "evaluation": "true"
    },
    {
        "year": "1434",
        "event": "Bitva u Lipan",
        "detail": "Bitva u Lipan se odehrála v neděli 30. května 1434 v lokalitě mezi vsí Hřiby a Lipskou horou, která leží přibližně jeden kilometr jižně od středočeské vesnice Lipany. Vojáci utrakvisticko-katolické aliance v čele s Divišem Bořkem z Miletínka zde drtivě porazili polní vojska sirotčího a táborského svazu, tvořící páteř vojenských složek radikálního křídla husitského hnutí. V průběhu bojových operací zahynul i vůdce radikálů Prokop Holý, nejvlivnější husitský politik, na jehož vůli před rokem 1434 do značné míry závisel osud revolučních Čech.[7] Porážka sesadila polní obce z postavení rozhodujícího politického činitele v zemi a umožnila umírněné straně uzavřít dohodu s císařem Zikmundem Lucemburským a legáty basilejského koncilu. Tím bitva předznamenala ukončení občanské války v zemích Koruny české.",
        "url": "https://cs.wikipedia.org/wiki/Bitva_u_Lipan",
        "evaluation": "false"
    },
];

// Významné postavy
const heroes = [
    {
        "name": "Karel IV.",
        "birth": "14.5.1316",
        "death": "29.11.1378",
        "biography": "Karel IV. byl římsko-německý král od července 1346 a od roku 1355 císař římský. Byl také italský (lombardský) král od roku 1355, burgundský (arelatský) král od roku 1365, moravský markrabě v letech 1333 až 1349 a lucemburský hrabě v období let 1346 až 1353. Pocházel po otci z dynastie Lucemburků, a po matce z rodu Přemyslovců. Byl to první český král, který se stal také císařem Svaté říše římské, a byl posledním korunovaným burgundským králem. Stal se tak osobním vládcem všech království Svaté říše římské. Karel IV. byl syn dědičky Přemyslovců Elišky a českého krále Jana Lucemburského. Byl pokřtěn jako Václav, jméno Karel přijal při biřmování během své výchovy ve Francii po svém strýci a kmotrovi Karlu IV. Sličném. Karel IV. patřil mezi nejvýznamnější panovníky vrcholného středověku. Byl neobyčejně vzdělaný a inteligentní, plynně hovořil pěti jazyky. Svou moc využil ke konsolidaci českého státu, který byl od jeho doby znám jako Koruna česká. Již jako císař nechal vytvořit Zlatou bulu, nejvýznamnější říšský ústavní zákon, který platil až do zániku Svaté říše římské roku 1806. Ta také významně upravovala vztah českého státu k říši a potvrzovala jeho výjimečné a nezávislé postavení v rámci říše. Jako český král proslul především založením univerzity v Praze, která nese jeho jméno, výstavbou Nového Města pražského, stavbou kamenného (později Karlova) mostu přes řeku Vltavu v Praze, zbudováním hradu Karlštejna a mnoha dalšími počiny. Spolu s otcem započali se stavbou Svatovítského chrámu. Karel také dosáhl významné územní expanze českého státu, především severovýchodním směrem a to hlavně díky své obratné sňatkové politice.",
        "portraits": [
            "karel4-01.jpg",
            "karel4-02.jpg",
            "karel4-03.jpg"
        ],
        "online": "https://cs.wikipedia.org/wiki/Karel_IV."
    },
    {
        "name": "Tomáš Garrigue Masaryk",
        "birth": "7.3.1850",
        "death": "14.9.1937",
        "biography": "T. G. Masaryk byl pedagog, politik a filozof. V roce 1918 se stal prvním československým prezidentem. Jeho osoba bývá spojována většinou pouze s obdobím první republiky, ačkoli značnou část svého díla vykonal již před ní, zvláště pokud jde o filozofickou realizaci jeho díla knižně, literární časopiseckou činnost a vynikající aktivitu v jeho třech poslaneckých obdobích ve vídeňské říšské radě. Masaryk byl označen za \"Prezidenta Osvoboditele\". Ještě za jeho života a prezidentování, k jeho osmdesátým narozeninám 7. 3. 1930, se národní shromáždění usneslo na zákoně \"Masaryk se zasloužil o stát\" (Lex Masaryk). Když \"Tatíček Masaryk\" 14. září 1937 po zánětu plic zemřel, zemřel pro jeho obdivovatele symbol morální velikosti a velké autority.",
        "portraits": [
            "tgm-01.png",
            "tgm-02.png",
            "tgm-03.jpg",
            "masaryk-capek.gif"
        ],
        "online": "https://cs.wikipedia.org/wiki/Tom%C3%A1%C5%A1_Garrigue_Masaryk"
    },
    {
        "name": "Václav Havel",
        "birth": "5.10.1936",
        "death": "18.12.2011",
        "biography": "Spisovatel a dramatik, zakázaný umělec, pronásledovaný občan, vězeň svědomí, vůdčí osobnost nenásilného svržení komunistického režimu a politických změn v Československu, obránce lidských a občanských práv, poslední prezident Československa a první prezident České republiky.",
        "portraits": [
            "havel-01.jpg",
            "havel-02.jpg",
            "havel-03.jpg"
        ],
        "online": "https://cs.wikipedia.org/wiki/V%C3%A1clav_Havel"
    },
    {
        "name": "Jan Amos Komenský",
        "birth": "28.3.1592",
        "death": "15.11.1670",
        "biography": "Byl poslední biskup Jednoty bratrské a jeden z největších českých myslitelů, filosofů a spisovatelů. Během svého života si získal renomé především jako pedagog, resp. teoretik pedagogiky a autor mnoha spisů z tohoto oboru. Byl jediným tvůrcem originální, filosoficky ukotvené pedagogické soustavy v českých zemích,[3] zabýval se všeobecnou teorií výchovy, didaktikou, vytvořil speciální metodiku výuky jazyků a sám sepisoval originální učebnice. Už za Komenského života si získaly mimořádnou oblibu jeho jazykové příručky Janua linguarum reserata (Dvéře jazyků otevřené, známé jako Brána jazyků otevřená) a Orbis sensualium pictus (Svět v obrazech). Komenský je považován za zakladatele moderní pedagogiky a vysloužil si přízvisko Učitel národů.",
        "portraits": [
            "komensky-01.jpg",
            "komensky-02.jpg",
        ],
        "online": "https://cs.wikipedia.org/wiki/Jan_Amos_Komensk%C3%BD"
    },
    {
        "name": "Jan Hus",
        "birth": "přibližně 1370",
        "death": "6.7.1415",
        "biography": "Jan Hus svůj život zasvětil boji za reformu církve a společnosti. Rektor Pražské univerzity, který se marně snažil obhájit své myšlenky před koncilem a byl upálen. Jeho lidský vzor i poselství jeho života se staly základem jedné z nejpodstatnějších historických etap našich dějin, která nese jeho jméno – husitství.",
        "portraits": [
            "hus-01.jpg",
            "hus-02.jpg",
            "hus-03.jpg"
        ],
        "online": "https://cs.wikipedia.org/wiki/Jan_Hus"
    },
    {
        "name": "Antonín Dvořák",
        "birth": "8.9.1841",
        "death": "1.5.1904",
        "biography": "Světoznámý český hudební skladatel, dirigent a profesor, jeden z největších hudebních géniů lidských dějin. Když Bůh rozdával darem nadání k hudbě, šel si Dvořák ne dvakrát, ale nejspíše hned třikrát. Za svůj život složil 11 oper (např. Rusalka, Armida, Král a uhlíř, či Jakobín), vokální a vokálně-instrumentální díla (Svatou Ludmilu, Requiem, Te Deum a nádhernou Stabat Mater), komorní skladby, koncerty, sbory, písně (Biblické písně), klavírní skladby, symfonické básně a 9 symfonií, z nichž vysoko do pomyslných hudebních nebes ční symfonie 9. - famózní „Novosvětská“, patřící k tomu vůbec nejkrásnějšímu, co kdy člověk zkomponoval. Snad se ani nelze divit tomu, že Američané, na jejichž půdě \"Novosvětská\" vznikla, považují Antonína Dvořáka také trochu za svého skladatele.",
        "portraits": [
            "dvorak-01.jpg",
            "dvorak-02.jpg",
        ],
        "online": "https://cs.wikipedia.org/wiki/Anton%C3%ADn_Dvo%C5%99%C3%A1k"
    },
    {
        "name": "Karel Čapek",
        "birth": "9.1.1890",
        "death": "25.12.1938",
        "biography": "Karel Čapek byl žurnalistou, prozaikem, dramatikem, překladatelem a kritikem, autorem knih pro děti. Karel Čapek podnikl řadu cest do zahraničí, z nichž získal podněty pro své cestopisné fejetony a prózy. Byl zvolen prvním předsedou československého PEN-KLUBU. Ve své vinohradské vile organizoval Karel Čapek přátelské páteční besedy. Ženou Karla Čapka byla herečka a spisovatelka Olga Scheinpflugová. Čapkovo mnohotvárné a neobyčejně bohaté dílo přervala náhlá smrt. Zemřel 25. prosince 1938 v Praze na zápal plic. Je pochován na Vyšehradě.",
        "portraits": [
            "capek-01.jpg",
            "masaryk-capek.gif",
            "capkove.jpg"
        ],
        "online": "https://cs.wikipedia.org/wiki/Karel_%C4%8Capek"
    },
    {
        "name": "Božena Němcová",
        "birth": "4.2.1820",
        "death": "21.1.1862",
        "biography": "Do podvědomí čtenářů se vryla jako autorka povídek a rozsáhlejších próz z venkovského prostředí a autorka pohádkových sbírek. Začínala jako básnířka a později svou činnost přizpůsobila zájmu o lidové tradice a folklór. Hrdiny povídek jsou většinou prostí lidé, které vykresluje až idealizovaně a staví je do kontrastu s boháči a vrchností.",
        "portraits": [
            "nemcova-01.jpg",
            "nemcova-02.jpg"
        ],
        "online": "https://cs.wikipedia.org/wiki/Bo%C5%BEena_N%C4%9Bmcov%C3%A1"
    },
    {
        "name": "Emil Zátopek",
        "birth": "19.9.1922",
        "death": "21.11.2000",
        "biography": "Emil Zátopek se stal prvním člověkem na světě, který uběhl trať 10 km pod 29 minut (28:54,2 1. června 1954 v Bruselu) a trať 20 km pod jednu hodinu (59:51,8 29. září 1951 ve Staré Boleslavi). Celkem vytvořil třináct světových rekordů na kilometrových a pět na mílových tratích. Jde o jednoho z největších atletů všech dob. Nejvíce ale proslul během olympijských her 1952 v Helsinkách, kde vyhrál běh na 5 km (14:06,72), 10 km (29:17,0), a dokonce i maratón (2:23:03,2), který tehdy běžel poprvé v životě. V každé z těchto disciplín tehdy zároveň ustavil nový olympijský rekord. Tento „trojboj“ se dodnes žádnému vytrvalci nepodařilo zopakovat a atletičtí experti pochybují, že se ještě někomu kdy podaří. Byl znám svým upracovaným stylem běhu, doprovázeným křečovitými grimasami, v cizině byl přezdíván česká lokomotiva a Satupekka.",
        "portraits": [
            "zatopek-01.jpg",
            "zatopek-02.jpg",
            "zatopek-03.jpg"
        ],
        "online": "https://cs.wikipedia.org/wiki/Emil_Z%C3%A1topek"
    },
    {
        "name": "Ema Destinnová",
        "birth": "20.2.1878",
        "death": "28.1.1930",
        "biography": "Do dějin umění se výrazným způsobem zapsala česká umělkyně Emílie Pavlína Kittlová, známá spíše jako Ema Destinnová. Žena, jejíž kouzlo bylo možné spatřit i slyšet, inspirovala umělce v tvorbě i životě. Její lyrický soprán mohutného a dramaticky zbarveného hlasu společně s hereckým ztvárněním stále znovu vyvolával úžas v koncertních sálech slavných scén začátkem 20. století.",
        "portraits": [
            "destinova-01.jpg",
        ],
        "online": "https://cs.wikipedia.org/wiki/Ema_Destinnov%C3%A1"
    },
];

// Články s historickými zajímavostmi
const articles = [
    {
        "title": "Slavná bitva na Vítkově: Vítězství husitů a potupa křižáků",
        "text": "Obrovské křižácké vojsko se rozložilo kolem Prahy, a když ho 9. července posílily oddíly rakouského vévody Albrechta Habsburského, dosáhlo své největší síly. Přesto jich na úplné obležení pražských měst bylo málo, Žižka stále z Vítkova kontroloval východní oblast.",
        "date": "14.7.1420",
        "author": "Jindřich Kačer",
        "source": "https://www.stoplusjednicka.cz/slavna-bitva-na-vitkove-vitezstvi-husitu-potupa-krizaku",
        "likes": "15",
        "dislikes": "5",
        "gallery": [
            "adolf_liebscher_-_bitva_na_hore_vitkove_dne_14._cervence_roku_1420.jpg",
            "jan_vilimek_-_jan_zizka_z_trocnova-2.jpg",
            "pisanello_024.jpg"
        ]
    },
    {
        "title": "Diplomat Jiří z Poděbrad: Co dělal, než se stal českým králem?",
        "text": "Musel snést hanlivé přídomky od nepřátel, osočování závistivých spojenců i zradu toho, kterému dopomohl ke království. Ač neměl královskou krev, přesto se jím Jiří z Poděbrad stal. Nadávali mu do panchartů, kterým zřejmě byl. Již od sedmi let byl sirotkem uprostřed víru husitských válek. Posmívali se mu kvůli jeho obézní postavě a považovali ho za neschopného rytířských soubojů. Vyčítali mu nekrálovský původ. Ačkoli katolíky toleroval, oni ho osočovali jako kacíře. Přes to všechno dokázal vystoupit po mocenských stupních až na samý vrchol. Kališnický král Jiří z Poděbrad byl zkrátka neobyčejně silnou osobností. Dokázal prozíravě reagovat na soudobé dění a úspěšně vládnout nejen své zemi, ale také sám sobě…",
        "date": "3.9.1448",
        "author": "Robert Vlk",
        "source": "https://www.stoplusjednicka.cz/diplomat-jiri-z-podebrad-co-delal-nez-se-stal-ceskym-kralem",
        "likes": "25",
        "dislikes": "3",
        "gallery": [
            "vaclav_brozik_-_volba.jpg",
        ]
    },
    {
        "title": "Muž s promítačkou: První stálé kino v Praze založil Viktor Ponrepo",
        "text": "Filmové projekce se zpočátku uskutečňovaly v kavárnách nebo nočních podnicích a přesně tak tomu bylo i v českých zemích. Na šíření kinematografie se podílela řada dnes už zapomenutých nadšenců, kteří si pořídili potřebné vybavení a putovali od města k městu. K založení stálého kina se ale z obavy o nedostatek diváků dlouho nikdo neměl. Jedním z prvních odvážlivců se stal  Viktor Ponrepo.",
        "date": "1907",
        "author": "Robert Šimek",
        "source": "https://www.stoplusjednicka.cz/muz-s-promitackou-prvni-stale-kino-v-praze-zalozil-viktor-ponrepo",
        "likes": "24",
        "dislikes": "1",
        "gallery": [
            "ponrepo1.jpg",
            "ponrepo2.jpg",
        ]
    },
    {
        "title": "Pokrok na odiv světu: V roce 1891 se v Praze konala Jubilejní zemská výstava",
        "text": "Velkou zásluhu na uskutečnění výstavy měla pražská obchodní komora a její předseda Bohumil Bondy. Roku 1887 vznikla z jeho popudu komise, která nakonec ustanovila zřízení stálé výstavní budovy v bubenečském parku. O rok později se rozhodlo o termínu výstavy a jejím názvu. Schválené výdaje činily 1 132 000 zlatých. Podnik si vyžadoval postavení mnoha budov, což se ovšem potkalo s velkou nepřízní počasí. Navzdory povodni v září 1890 a silným mrazům na přelomu let 1890 a 1891 byla výstava slavnostně zahájena 15. května 1891. Událost doprovázely Dvořákovy fanfáry a úvodní projev pronesl arcivévoda Karel Ludvík. Později ji navštívil i sám císař František Josef I. ",
        "date": "15.5.1891",
        "author": "Ilona Šťastná",
        "source": "https://www.stoplusjednicka.cz/pokrok-na-odiv-svetu-v-roce-1891-se-v-praze-konala-jubilejni-zemska-vystava",
        "likes": "14",
        "dislikes": "2",
        "gallery": [
            "bruner3_cisar.jpg",
        ]
    }
];

$(function () {
    $("h2").on("click", function () {
        $(this).parents(".row").next().toggle(1000);
    });
    events.forEach((event) => {
        $("#udalosti tbody").append(`<tr>
            <td class="event-year">${event.year}</td>
            <td>
              <p class="event-name"><i class="fas fa-chevron-down"></i> <a href="${event.url}" target="_new">${event.event}</a></p>
              <p class="event-detail">${event.detail}</p>
            </td>            
            <td class="event-evaluation">${(event.evaluation == "true") ? '<i class="fas fa-plus-circle text-success"></i>' : '<i class="fas fa-minus-circle text-danger"></i>'}</td>
        </tr>`);
    });
    $(".event-detail").hide();
    $(".event-name i, .event-name a").on("mouseover", function () {
        $("#udalosti tr").removeClass("bg-secondary text-white");
        $(this).parents("tr").addClass("bg-secondary text-white");
        $(".event-detail").hide();
        $(this).parent().next().show(500);
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
            $(".gallery").append(`<div class="col-sm-4"><a href="#"><img src="images/${hero.portraits[i]}" alt="" class="img-fluid"></a></div>`);
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