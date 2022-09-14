import React from 'react';
import hotelImage from '../../assests/images/inside1.jpg';
import './property.css';
export default function Property() {
  const [propertyData, setPropertyData] = React.useState([]);
  const getProperty = async () => {
    const images = [];
    try {
      const apiUrl = 'http://localhost:3003/admin/hotel/countbytype';
      const responce = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await responce.json();
      console.log(json);
      setPropertyData(json);
    } catch (error) {
      console.log('error');
    }
  };
  React.useEffect(() => {
    getProperty();
  }, []);
  console.log(propertyData);
  return (
    <>
      <div className="listContainer">
        <h1 className="listContainerTitle">Browse by Property Type</h1>
        <div className="pList">
          {propertyData &&
            propertyData.map(property => {
              return (
                <div className="pListItem">
                  <img src={hotelImage} alt="" className="propertyImage" />
                  <div className="pItemTitle">
                    <h1>{property.type}</h1>
                    <h2>{property.count}</h2>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
