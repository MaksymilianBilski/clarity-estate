export const BusinessSolutionDescriptionItem = (props: { svg: String }) => {
  return (
    <li className="index-main-lorem__item">
      <div className="index-main-lorem__icon">
        <svg
          width="65.32"
          height="70"
          className="index-main-lorem__svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use href="images/sprite.svg#icon-antenna-1"></use>
        </svg>
      </div>
      <h3 className="index-main-lorem__h3">LOREM IPSUM</h3>
      <p className="index-main-lorem__p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel arcu
        sem. Sed non sodales dui. Interdum et malesuada
      </p>
    </li>
  );
};
