export const TeamItem = () => {
  return (
    <li class="index-main-team__item">
      <figure class="index-main-team__card">
        <img
          src="images/img5.jpg"
          width="450"
          height="460"
          class="index-main-team__img"
          alt="asda"
        />
        <figcaption class="index-main-team__figcaption">
          <h4 class="index-main-team__h4">John Doe</h4>
          <p class="index-main-team__p">Product designer</p>
          <section class="icons-team index-main-team__icons">
            <div class="icons-team__div">
              <svg class="icons-team__svg" width="20" height="20">
                <use href="images/sprite.svg#icon-instagram-2"></use>
              </svg>
            </div>
            <div class="icons-team__div">
              <svg class="icons-team__svg" width="20" height="20">
                <use href="images/sprite.svg#icon-twitter-1"></use>
              </svg>
            </div>
            <div class="icons-team__div">
              <svg class="icons-team__svg" width="20" height="20">
                <use href="images/sprite.svg#icon-facebook-1"></use>
              </svg>
            </div>
            <div class="icons-team__div">
              <svg class="icons-team__svg" width="20" height="20">
                <use href="images/sprite.svg#icon-linkedin-1"></use>
              </svg>
            </div>
          </section>
        </figcaption>
      </figure>
    </li>
  );
};
