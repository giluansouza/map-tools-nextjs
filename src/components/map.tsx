const Map = (props) => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const mapHandlers = useMemo(
    () => ({
      click(e) {
        // center view on the coordinates of the click
        // `this` is the Leaflet map object
        this.setView([e.latlng.lat, e.latlng.lng]);
      },
    }),
    []
  );

  return (
    <MapContainer
      ref={mapRef}
      touchZoom={false}
      zoomControl={false}
      style={{ height: '400px', zIndex: '0!important' }}
    >
      <TileLayer url="..." attribution="..." style={{ zIndex: '0!important' }} />
      <ZoomControl position="topright" style={{ zIndex: '10!important' }} />
      <MapConsumer
        eventsHandler={mapHandlers}
      />
      <Marker
        ref={markerRef}
        icon={{
          iconUrl: CustomIcon.src,
          iconAnchor: [16,32],
          iconSize: [32,32]
        }}
        style={{ zIndex: '1!important' }}
      />
    </MapContainer>
  );
};