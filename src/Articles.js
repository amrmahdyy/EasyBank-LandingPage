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
          <div className="author">By Claire Robinson </div>
          <h5 className="articleHeading">
            Receive money in any currency with no fees
          </h5>
          <p>
            The world is getting smaller and we’re becoming more mobile. So why
            should you be forced to only receive money in a single
          </p>
        </article>
        <article className="article-3">
          <img src={articleImg3} alt="article Image" />
          <div className="author">By Claire Robinson </div>
          <h5 className="articleHeading">
            Receive money in any currency with no fees
          </h5>
          <p>
            The world is getting smaller and we’re becoming more mobile. So why
            should you be forced to only receive money in a single
          </p>
        </article>
        <article className="article-4">
          <img src={articleImg4} alt="article Image" />
          <div className="author">By Claire Robinson </div>
          <h5 className="articleHeading">
            Receive money in any currency with no fees
          </h5>
          <p>
            The world is getting smaller and we’re becoming more mobile. So why
            should you be forced to only receive money in a single
          </p>
        </article>
      </div>
    </section>
  );
};
export default Articles;
