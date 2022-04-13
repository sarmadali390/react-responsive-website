import {Link} from 'react-router-dom'
const Showcase = () => {
  return (
    <div className="showcase">
      <h2>Discover an Adventure</h2>
      <h1>Travel the World</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur 
        aspernatur repellat, sequi quidem ab.
      </p>
      <div className="showcase__buttons">
        <button className="showcase__btn-services">SERVICES</button>
        <Link to={"/about"}><button className="showcase__btn-about">ABOUT US</button></Link>
      </div>
    </div>
  );
};

export default Showcase;
