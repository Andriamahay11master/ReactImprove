import "./main.scss";
interface MainProps {
  picture: {
    large: string;
  };
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  location: {
    city: string;
    country: string;
  };
  registered: {
    age: number;
    date: string;
  };
}
const Main = ({
  picture,
  name,
  email,
  phone,
  location,
  registered,
}: MainProps) => {
  return (
    <div className="cardWrapper">
      <div className="cardMain">
        <div className="cardHeader">
          <img src={picture?.large} alt="img" />
          <h1>
            {name?.first} {name?.last}
          </h1>
        </div>
        <div className="cardMiddle">
          <h3>{email}</h3>
          <h3>{phone}</h3>
          <h3>
            {location?.city}/ {location?.country}
          </h3>
        </div>
        <div className="cardFooter">
          <p>Age : {registered?.age}</p>
          <p>{new Date(registered?.date).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
