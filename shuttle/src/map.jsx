import React from "react";
import { MapContainer, TileLayer, Marker, Popup,Circle,CircleMarker,Rectangle,Polygon,Polyline } from "react-leaflet";

import 'leaflet/dist/leaflet.css'

const Mapview = (props) => {
  const center = [12.970744, 79.160088]



const multiPolyline = [
   [12.972358779700734, 79.16619846380738],
  [12.972464008397433, 79.1661615216922],
  [12.972007093991005, 79.1642774736912],
  [12.971835404721624, 79.16332266199858],
  [12.971544640368394, 79.16170573394048],
  [12.971381258345158, 79.16087311542233],
  [12.971317567018778, 79.16051506102511],
  [12.971162492417351, 79.15952899068563],
  [12.97112649294302, 79.15931302139683 ],
  [ 12.971024032868486, 79.15869353052165 ],
  [ 12.970944, 79.158688 ],
  [ 12.970376716246811, 79.1586662046975 ],
  [ 12.968712110609951, 79.15860770531052 ],
  [ 12.968757716389069, 79.15777701396988],
  [ 12.968826125046812, 79.15587578389338 ],
  [ 12.968831825766156, 79.15530248987272 ],
  [ 12.969726837284856, 79.15531418975011 ],
  [ 12.96965272817309, 79.1564958773669 ],
  [ 12.969658428874776, 79.1574260176197 ],
  [ 12.969732537984848, 79.15764246535149 ],
  [12.969738238684704, 79.15816895983421],
  [12.97029690663727, 79.1581806597116],
  [12.97074726050202, 79.15827425873076],
  [12.970906879397608, 79.15828010866946],
  [12.97181328478267, 79.15819235958953],
  [12.971915896501839, 79.1580929106317],
  [12.971932998450923, 79.15790571259338],
  [12.972007106883346, 79.15753131651678],
  [12.972058412708245, 79.15658362644787],
  [12.972839400101703, 79.15664212580229],
  [12.973705894169349, 79.15672987488064],
  [12.973637486867148, 79.1579115625121],
  [12.973705894182899, 79.15920439896412],
  [12.97375664505931, 79.1597054830234],
  [12.9735414186763, 79.15965578856093]
 
  
]
const multiPolyline1=[
  [12.971173288924577, 79.16196081052945],
    [12.97132282513992, 79.16204890325369],
    [12.971480668825672, 79.16203469474785],
  [12.971533283365337, 79.16235012357755],
  [12.971547409556354, 79.16260655335998],
  [12.971984940549829, 79.16467531198107],
  [12.972358779700734, 79.16619846380738],
 
]

const fillBlueOptions = { color: 'blue' }

const limeOptions = { color: 'lime' }

const redOptions = { color: 'red' }

  
  return (
    <>
    <div className="container">
    <h2 className="mt-5 mb-5">Map View</h2>
    <h4 className="mb-5">Blue circle represents starting point, Red circle represents destination</h4>
    <MapContainer style={{width:"100%",height:"650px"}} center={center} zoom={17} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    <CircleMarker center={[12.9735414186763, 79.15965578856093]} pathOptions={fillBlueOptions} radius={5}>
      
      <Popup>Starting point</Popup>
    </CircleMarker>
    <CircleMarker center={[12.971173288924577, 79.16196081052945]} pathOptions={redOptions} radius={5}>
      <Popup>Ending point</Popup>
    </CircleMarker>
    <Polyline pathOptions={fillBlueOptions} positions={multiPolyline} />  
    <Polyline pathOptions={redOptions} positions={multiPolyline1} />  
  </MapContainer>
  </div>
      
    </>
  );
};

export default Mapview;
