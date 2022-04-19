import useDatas from "../../../Hooks/useData";
import Service from "../Service/Service";

const Services = () => {
  const [datas, setDatas] = useDatas([])
  return (
    <div>
      <div className="container">
        <h2>My Service</h2>
        <div className="row">
          {
            datas.map(service => <Service
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
