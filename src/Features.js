import imgCard1 from "./images/icon-online.svg";
import imgCard2 from "./images/icon-onboarding.svg";
import imgCard3 from "./images/icon-budgeting.svg";
import imgCard4 from "./images/icon-api.svg";

import "./Styles/Features.css";
const Features = () => {
  return (
    <section id="Features">
      <div className="container featuresSection">
        <div className="display-4 cardsTitle">Why choose Easybank?</div>
        <p className="lead">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before
        </p>
        <div className="cards">
          <div className="card-1">
            <img src={imgCard1} alt="" />
            <h4>Online Banking</h4>
            <p className="lead">
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world
            </p>
          </div>
          <div className="card-2">
            <img src={imgCard2} alt="" />
            <h4> Simple Budgeting </h4>
            <p className="lead">
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits.
            </p>
          </div>
          <div className="card-3">
            <img src={imgCard3} alt="" />
            <h4>Fast Onboarding </h4>
            <p className="lead">
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>
          <div className="card-4">
            <img src={imgCard4} alt="" />
            <h4>Open API</h4>
            <p className="lead">
              Open API Manage your savings, investments, pension, and much more
              from one account.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
