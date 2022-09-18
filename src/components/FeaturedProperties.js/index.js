import React from 'react';
import inside6 from '../../assests/images/inside6.jpg';
import './featuredProperties.css';
export default function FeaturedProperties() {
  const [fpData, setFpData] = React.useState([]);
  const getFeaturedProperties = async () => {
    try {
      const url = 'http://localhost:3003/admin/hotels?featured=true&limit=3';
      const responce = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await responce.json();
      // console.log(json);
      setFpData(json);
      // console.log(fpData);
    } catch (error) {
      console.log('error is fetching');
    }
  };
  React.useEffect(() => {
    getFeaturedProperties();
  }, []);

  return (
    <>
      <div className="fp">
        {fpData &&
          fpData.map(item => {
            return (
              <div className="fpWrap">
                <div className="fpItem" key={item._id}>
                  <img src={inside6} alt="" className="fpImage" />
                  <span className="fpName">{item.name}</span>
                  <span className="fpCity">{item.city}</span>
                  <span className="fpPrice">{item.cheapestPrice}</span>
                  <div className="fpRating">
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
