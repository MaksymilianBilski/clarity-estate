export const TeamItem = () => {
  return (
    <li className="index-main-team__item">
      <figure className="index-main-team__card">
        <img
          src="images/img5.jpg"
          width="450"
          height="460"
          className="index-main-team__img"
          alt="asda"
        />
        <figcaption className="index-main-team__figcaption">
          <h4 className="index-main-team__h4">John Doe</h4>
          <p className="index-main-team__p">Product designer</p>
          <section className="icons-team index-main-team__icons">
            <div className="icons-team__div">
              <svg className="icons-team__svg" width="20" height="20">
                <use href="images/sprite.svg#icon-instagram-2"></use>
              </svg>
            </div>
            <div className="icons-team__div">
              <svg className="icons-team__svg" width="20" height="20">
                <use href="images/sprite.svg#icon-twitter-1"></use>
              </svg>
            </div>
            <div className="icons-team__div">
              <svg className="icons-team__svg" width="20" height="20">
                <use href="images/sprite.svg#icon-facebook-1"></use>
              </svg>
            </div>
            <div className="icons-team__div">
              <svg className="icons-team__svg" width="20" height="20">
                <use href="images/sprite.svg#icon-linkedin-1"></use>
              </svg>
            </div>
          </section>
        </figcaption>
      </figure>
    </li>
  );
};
