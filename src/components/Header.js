import diaplayPic from '../img/myImg.jpg';

const Header = () => {
  return(
    <header>
      <div className="container-fluid text-center">
        <img src={diaplayPic} className="img-fluid" alt="me not IRL" width="200"/>
        <h1>Abed Al Rahim Soubra</h1>
        <h3>Your friendly neighbourhood nerd</h3>
        <h2>Software Engineer | Paris, France</h2>
      </div>
    </header>
  );
}

export default Header;