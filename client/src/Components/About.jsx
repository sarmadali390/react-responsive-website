import {Link} from 'react-router-dom'
const About = () => {
    return (
        <div className="showcase">
      <h2>React Developer</h2>
      <h1>Sarmad Ali</h1>
      <p>
        I am a software engineer and have completed 
        degree in 2022. Freelance since Oct,2018.
      </p>
      <div className="showcase__buttons">
        <Link to={"/"}><button className="showcase__btn-services">SERVICES</button></Link>
        <button className="showcase__btn-about">ABOUT US</button>
      </div>
    </div>
    )
}

export default About