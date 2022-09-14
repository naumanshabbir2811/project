import React from 'react';

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
      console.log(json);
      setFpData(json);
      console.log(fpData);
    } catch (error) {
      console.log('error is fetching');
    }
  };
  React.useEffect(() => {
    getFeaturedProperties();
  }, []);

  return (
    <>
      {fpData &&
        fpData.map(item => {
          return (
            <div className="fp" key={item._id}>
              <div className="fpItem">
                <img src="" alt="" className="fpImage" />
                <span className="fpName">{item.name}</span>
                <span className="fpCity"></span>
                <span className="fpPrice"></span>
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
