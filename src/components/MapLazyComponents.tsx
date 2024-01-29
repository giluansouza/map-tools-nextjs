import {
  MapContainer as LMapContainer,
} from 'react-leaflet';

export const MapContainer = ({ forwardedRef, ...props }: any) => (
  <LMapContainer {...props} ref={forwardedRef} />
);