//map starts

function myMap() {
    var myLatLng = {
        lat: 9.502214,
        lng: 76.344656
    };

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: myLatLng,
        panControl: true,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        overviewMapControl: true,
        rotateControl: true
    });

        var image = 'img/map/pointer2.png';
		//var image = 'https://material.io/icons/#ic_location_on';
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Sharing Houseboats, Alleppy',
        icon: image
    });
    
    
}
// map ends
