import "./Styles/Main.css";
import mockupImg from "./images/image-mockups.png";
const Main = () => {
  return (
    <main className="container" id="Main">
      <div className="info">
        <div className="title display-5">Next generation digital marketing</div>
        <p className="lead">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className="inviteBtn">Request Invite</button>
      </div>
      <div className="mockups">
        <img src={mockupImg} alt="Mockup Mobile Image" />
      </div>
    </main>
  );
};

export default Main;
