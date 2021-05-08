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
                lat: -19.57812261652015,
                lng: 124.86706846177987
            },

            {
                lat: -33.77692520809179,
                lng: 151.1873731660845
            },

            {
                lat: 24.193990229745815,
                lng: 90.35240665248416,
            },

            {
                lat: 23.803820012284625,

                lng: 90.41794211258352
            },

            {
                lat: 14.003209207073002,

                lng: 100.55037744706993
            },

            {
                lat: 12.7050420783994,

                lng: 104.77954308420692
            },
            {
                lat: 15.364740116588298,
                lng: 101.34307362392626,
            },

            {
                lat: 11.698192508631681,
                lng: 104.88524370654893,
            },

            {
                lat: 14.544192251884967,
                lng: 108.12473037268836
            },

            {
                lat: 10.973138530100575,
                lng: 106.64625568757907,
            },

            {
                lat: 19.77775836131312,
                lng: 102.35075058556293,
            },

            {
                lat: 3.6894925147822413,
                lng: 102.10937329187811,
            },

            {
                lat: 1.3769500918881372,
                lng: 103.82145349675537,
            },

            {
                lat: 31.8713096479375,
                lng: -6.216468577665735,
            },

            {
                lat: 31.982849978730503,
                lng: -9.928879051947195,
            },

            {
                lat: 34.53636043215588,
                lng: -6.742843822229556,
            },

            {
                lat: 31.497002785436838,
                lng: -8.258957138440019,
            },

            {
                lat: 35.26199832212625,
                lng: -5.407205868527277,
            },

            {
                lat: 42.16052454603499,
                lng: 43.42186472154628,
            },

            {
                lat: 54.88001220840884,
                lng: -2.549650143731335,
            },

            {
                lat: 51.703468539065156,
                lng: -0.13265790049726703,
            },

            {
                lat: 55.01963321925325,
                lng: -1.3732675846952123,
            }
        ];

        


        


        var markers = locations.map(function (location, i) {
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length],
                title: "click for more details"
            });
        });


        

        


        
            

        var markerclusterer = new MarkerClusterer(map, markers, {
            imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
        });
    }