import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [Services, setServices] = useState([])
  useEffect(() => {
    fetch('services.json').then(res => res.json()).then(data => setServices(data))
  }, [])
  return (
    <div>
      <div className="container">
        <h2>Services: {Services.length}</h2>
        <div className="row">
          {
            Services.map(service => <Service
              key={service.id}
              service={service}
            ></Service>)
          }
        </div>
      </div>
    </div>
  );
};

export default Services;
