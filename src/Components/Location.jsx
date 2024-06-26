import React, {useEffect, useState} from 'react';
import { MapContainer, TileLayer, Popup, Polyline } from 'react-leaflet'
import './index.css';
import axios from 'axios';
import polyline from '@mapbox/polyline'

function Location() {

  interface Node {
    activityPositions: any;
    activityName: string;
  }

  const [nodes, setNodes] = useState<Node[]>([]);

  const clientID = "your client id";
  const clientSecret = "your client secret";
  const refreshToken = "your refresh token"
  const auth_link = "https://www.strava.com/oauth/token"
  const activities_link = `https://www.strava.com/api/v3/athlete/activities`

  useEffect(() => {
    async function fetchData() {
      const stravaAuthResponse = await axios.all([
        axios.post(`${auth_link}?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`)
      ]);
      
      const stravaActivityResponse = await axios.get(`${activities_link}?access_token=${stravaAuthResponse[0].data.access_token}`);
      console.log(stravaActivityResponse.data[0]);
      const polylines = [];
      for (let i = 0; i < stravaActivityResponse.data.length; i += 1) {
        const activity_polyline = stravaActivityResponse.data[i].map.summary_polyline;
        const activity_name = stravaActivityResponse.data[i].name;
        polylines.push({activityPositions: polyline.decode(activity_polyline), activityName: activity_name});
      }
      console.log(polylines)
      setNodes(polylines);
    }

    fetchData();
  }, []);

  return (
   
    <MapContainer center={[42.585444, 13.257684]} zoom={6} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {nodes.map((activity, i) => (
        <Polyline key = {i} positions={activity.activityPositions}>
          <Popup>
            <div>
              <h2>{"Name: " + activity.activityName}</h2>
            </div>
          </Popup>
        </Polyline>
      ))}
    </MapContainer>
  );
}

export default Location;