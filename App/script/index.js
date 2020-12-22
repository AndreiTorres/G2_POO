var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
		osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		osm = L.tileLayer(osmUrl, {maxZoom: 20, attribution: osmAttrib});
	var map = L.map('map').setView([21.04817, -89.64448], 18).addLayer(osm);
	L.marker([21.04817, -89.64448])
		.addTo(map)
		marker.bindPopup('FMAT').openPopup();