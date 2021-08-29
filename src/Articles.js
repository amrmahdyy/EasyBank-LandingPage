import articleImg1 from "./images/image-currency.jpg";
import articleImg2 from "./images/image-restaurant.jpg";
import articleImg3 from "./images/image-plane.jpg";
import articleImg4 from "./images/image-confetti.jpg";
import "./Styles/Articles.css";
const Articles = () => {
  return (
    <section className="container" id="Articles">
      <div className="display-4">Latest Articles</div>
      <div className="articles">
        <article className="article-1">
          <img src={articleImg1} alt="article Image" />
          <div className="author">By Claire Robinson </div>
          <h5 className="articleHeading">
            Receive money in any currency with no fees
          </h5>
          <p>
            The world is getting smaller and we’re becoming more mobile. So why
            should you be forced to only receive money in a single
          </p>
        </article>
        <article className="article-2">
          <img src={articleImg2} alt="article Image" />
          <div className="author">By Wilson Hutton </div>
          <h5 className="articleHeading">
            Treat yourself without worrying about money
          </h5>
          <p>
            Our simple budgeting feature allows you to separate out your
            spending and set realistic limits each month. That means you
          </p>
        </article>
        <article className="article-3">
          <img src={articleImg3} alt="article Image" />
          <div className="author">By Wilson Hutton </div>
          <h5 className="articleHeading">
            Take your Easybank card wherever you go We want you to enjoy your
            travels.
          </h5>
          <p>
            This is why we don’t charge any fees on purchases while you’re
            abroad. We’ll even show you
          </p>
        </article>
        <article className="article-4">
          <img src={articleImg4} alt="article Image" />
          <div className="author">By Claire Robinson </div>
          <h5 className="articleHeading">
            Our invite-only Beta accounts are now live!
          </h5>
          <p>
            After a lot of hard work by the whole team, we’re excited to launch
            our closed beta.It’s easy to request an invite through the site
          </p>
        </article>
      </div>
    </section>
  );
};
export default Articles;
