//Failed
function initMap() {
  fetch(`https://amapalanches.com/includes/v1/getTodas.php`)
    .then(function(response){ 
      return response.json();
    })
    .then(function(data){ 
      let location = data.todas;

      const myLatLng = {
        lat: parseFloat(location[0].lat),
        lng: parseFloat(location[0].lng)
      };

      let map = new google.maps.Map(document.getElementById("map"), {
        center: myLatLng,
        zoom: 15,
      });

      for(let i in location){ 
        let newLatLng = {
          lat: parseFloat(location[i].lat),
          lng: parseFloat(location[i].lng)
        }
        new google.maps.Marker({
          position: newLatLng,
          map: map,
          title: 'Lanches',
          icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
        });
      }
    })
  }
