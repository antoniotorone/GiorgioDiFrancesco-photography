function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: -4.910663558482745,
            lng: 76.22682992146508
        }

    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


    var locations = [

        {
            "name": "Telfar desert",
            "location": {lat: -19.57812261652015 ,lng: 124.86706846177987},
            "info": 'Telfer is a minesite in the Pilbara region of Western Australia, within the Great Sandy Desert. It is the state is most isolated town, and is located 1,300 kilometres (808 mi) north-east of the state capital Perth.[3] The gold, copper and silver mine is run by Newcrest Mining, and is one of the largest gold mines in Australia'
        },

        {   "name": "Sydney",
            "location": {lat: -33.77692520809179 , lng: 151.1873731660845},
            "info": 'Sydney is the capital city of the state of New South Wales, and the most populous city in Australia and Oceania.[5] Located on Australia  east coast, the metropolis surrounds Port Jackson and extends about 70 km (43.5 mi) on its periphery towards the Blue Mountains to the west, Hawkesbury to the north, the Royal National Park to the south and Macarthur to the south-west.'
        },

        {   "name":"Dhaka",
            "location": {lat: 24.193990229745815 , lng: 90.35240665248416 },
            "info": 'Dhaka , formerly known as Dacca , is the capital and the largest city of Bangladesh. It is the ninth-largest and the sixth-most densely populous city in the world, with a population of 8.9 million residents within the city limits, and a population of over 21 million residents in the Greater Dhaka Area. Dhaka is the economic, political, and cultural center of Bangladesh.',
        },

        {   "name": "Pathum",
            "location": {lat: 14.003209207073002 , lng: 100.55037744706993},
            "info": 'Pathum Thani is one of the central provinces (changwat) of Thailand. The province is north of Bangkok and is part of the Bangkok metropolitan area. In many places the boundary between the two provinces is not noticeable as both sides of the boundary are equally urbanized. Pathum Thani town is the administrative seat, but Ban Rangsit, seat of Thanyaburi District.',
        },

        {   "name":"Phnom Penh",
            "location": {lat:11.568271, lng:104.9224426},
            "info":'Phnom Penh is the capital and most populous city in Cambodia. It has been the national capital since French colonization of Cambodia, and has grown to become the nation economic, industrial, and cultural center.',
        },
        {   "name":"Chai Badan",
            "location": {lat: 15.364740116588298 , lng:101.34307362392626},
            "info": 'Chai Badan (Thai: ชัยบาดาล, pronounced [t͡ɕʰāj bāː.dāːn]) is a district (amphoe) in the eastern part of Lopburi Province, central Thailand. The local people usually call it Lam Narai, as the district center is in Tambon Lam Narai.'
            
           
        },

        {   "name":"Pattaya city",
            "location": {lat: 13.216440374935782 , lng:100.70613585917654},
            "info": 'Pattaya (Thai: พัทยา, RTGS: Phatthaya, pronounced [pʰát.tʰā.jāː] (About this soundlisten)) is a city in Thailand. It is on the east coast of the Gulf of Thailand, about 100 kilometres (62 mi) southeast of Bangkok, within, but not part of, Bang Lamung District in the province of Chonburi. Pattaya City (Thai: เมืองพัทยา, RTGS: Mueang Phatthaya) is a self-governing area'
            
        },

        {   "name":"Ho Chi Minh",
            "location": {lat: 10.976284480395805 , lng:106.6353360126606614},
            "info": 'Ho Chi Minh City, commonly known by its previous name, Saigon , is the largest and most populous city in Vietnam, situated in South Vietnam. In southeastern region, the city surrounds the Saigon River and covers about 2,061 square kilometres (796 square miles).'
           
        },

        {   "name":"Hanoi",
            "location": {lat: 21.149082902726203, lng:105.7722216615003},
            "info": 'Hanoi is the capital city of Vietnam. It covers an area of 3,358.6 km2 (1,296.8 sq mi). The second largest city in Vietnam, it consists of 12 urban districts, 1 district-leveled town and 17 rural districts. Located within the Red River Delta, Hanoi is the cultural and political centre of Vietnam.'
        },

        {   "name":"Vientiane",
            "location": {lat:18.029586520737347, lng: 102.76376157711208},
            "info": 'Vientiane (/viˌɛntiˈɑːn/ vi-EN-ti-AHN,[3] French: [vjɛ̃tjan]; Lao: ວຽງຈັນ, pronounced [ʋíːəŋ tɕàn]) is the capital and largest city of Laos, on the banks of the Mekong River near the border with Thailand. Vientiane became the capital in 1573, due to fears of a Burmese invasion, but was later looted, then razed to the ground in 1827 by the Siamese (Thai).',
            
        },

        {   "name": "Singapore",
            "location": {lat:1.0112724590492967 , lng:103.86830097937286},
            "info": 'Singapore (/ˈsɪŋ(ɡ)əpɔːr/ (About this soundlisten)), officially the Republic of Singapore, is a sovereign island city-state in maritime Southeast Asia. It lies about one degree of latitude (137 kilometres or 85 miles) north of the equator, off the southern tip of the Malay Peninsula, bordering the Straits of Malacca to the west, the Riau Islands (Indonesia) to the south.',

        },

        {   "name": "Kuala Lumpur",
            "location": {lat:2.92167900574171 , lng:102.02259781181232},
            "info": 'Kuala Lumpur officially the Federal Territory of Kuala Lumpur, is a federal territory and the capital city of Malaysia. It is the largest city in Malaysia, covering an area of 243 km2 (94 sq mi) with an estimated population of 1.73 million as of 2016.Greater Kuala Lumpur, also known as the Klang Valley, is an urban agglomeration of 7.564 million people as of 2018.',
        },

        {  "name": "MArrakesh",
           "location":{lat:31.403279042074054, lng:-7.929367287089918},
           "info": 'Marrakesh is the fourth largest city in the Kingdom of Morocco.[3] It is the capital of the Moroccan region of Marrakech-Asfi. It is west of the foothills of the Atlas Mountains. Marrakesh is 580 km (360 mi) southwest of Tangier, 327 km (203 mi) southwest of the Moroccan capital of Rabat, 239 km (149 mi) south of Casablanca, and 246 km (153 mi) northeast of Agadir.',
        },

        {   "name": "Rabat",
            "location":{lat:34.46392760227769 , lng:-6.962570389796287},
            "info": 'Rabat is the capital city of Morocco and the country seventh largest city with an urban population of approximately 580,000 (2014)[2] and a metropolitan population of over 1.2 million. It is also the capital city of the Rabat-Salé-Kénitra administrative region.[6] Rabat is located in north-western Morocco, by the Atlantic Ocean at the mouth of the river Bou Regreg.',
        },

        {  "name": "Fez",
           "location": {lat:34.27938326164539 , lng:-5.003541769082469},
           "info": 'Fez  is a city in northern Morocco and the capital of the Fès-Meknès administrative region. It is the second largest city in Morocco after Casablanca,[4] with a population of 1.22 million (2020). Located to the northeast of the Atlas Mountains, Fez is situated at a crossroad connecting the important cities of different regions,',
        },

        {  "name": "Essaouira",
           "location": {lat:31.675826272098792 , lng:-9.705869121505495},
           "info": 'Essaouira has long been considered as one of the best anchorages of the Moroccan coast. The Carthaginian navigator Hanno visited in the 5th century BC and established the trading post of Arambys. Around the end of the 1st century BCE or early 1st century CE, the Berber king Juba II established a Tyrian purple factory.',
        },

      

        {  "name": "Newcastle",
           "location":{lat:54.988359623084435 , lng:-1.6172430260601416},
           "info": 'Newcastle upon Tyne often simply Newcastle, is the most populous city and metropolitan borough in North East England. It forms the core of the Tyneside conurbation, the eighth most populous urban area in the United Kingdom. The city is situated on the River Tyne northern bank, approximately 8.5 mi (13.7 km) from the North Sea.',
        },

        {   "name": "London",
            "location":{lat:51.55865338876702 , lng:-0.20415542101612708},
            "info": 'London is the capital and largest city of England and the United Kingdom.The city stands on the River Thames in the south-east of England, at the head of its 50-mile (80 km) estuary leading to the North Sea. London has been a major settlement for two millennia, and was originally called Londinium, which was founded by the Romans.',
        }
    ];


    







    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location.location,
            label: labels[i % labels.length],
            title: location.name
        });
    });

    let infowindow; 

    for (let marker of markers) {
        marker.addListener("click", () => {
            if(infowindow){
                infowindow.close();
            }
            for(let location of locations) {
                console.log(location.name);
                if(marker.title === location.name){
                    // create an infoWindow using location.name
                    infowindow = new google.maps.InfoWindow({
                        content: location.info
                    })
                    // display the infoWindow
                    infowindow.open(map, marker)
                }
            }
        })
    }


    var markerclusterer = new MarkerClusterer(map, markers, {
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}