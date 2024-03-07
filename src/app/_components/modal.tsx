export const Modal = () => {
  return (
    <div className="backdrop is-hidden" data-modal>
      <div className="modal">
        <form className="index-modal-form modal__item">
          <span className="index-modal-form__leavedata">
            Zostaw swoje dane w formularzu poniżej
          </span>
          <label htmlFor="user" className="index-modal-form__label">
            <span className="index-modal-form__user">Imie</span>
            <input
              type="textarea"
              className="index-modal-form__userarea index-modal-form__userarea--userplace"
              name="user"
              required
            >
              <svg width="18" height="18" className="index-modal-form__usersvg">
                <use href="images/sprite.svg#icon-person-black-18dp-1"></use>
              </svg>
            </input>
          </label>
          <label htmlFor="phone-number" className="index-modal-form__label">
            <span className="index-modal-form__tel">Telefon</span>
            <input
              type="tel"
              name="phone-number"
              className="index-modal-form__telarea index-modal-form__telarea--telplace"
              required
            >
              <svg width="18" height="18" className="index-modal-form__telsvg">
                <use href="images/sprite.svg#icon-phone-black-18dp-1"></use>
              </svg>
            </input>
          </label>
          <label htmlFor="email" className="index-modal-form__label">
            <span className="index-modal-form__tel">Email</span>
            <input
              type="email"
              className="index-modal-form__emailarea index-modal-form__emailarea--emailplace"
              name="email"
              required
            >
              <svg
                width="18"
                height="18"
                className="index-modal-form__emailsvg"
              >
                <use href="images/sprite.svg#icon-email-black-18dp-1"></use>
              </svg>
            </input>
          </label>
          <label htmlFor="comment" className="index-modal-form">
            <span className="index-modal-form__comment">Komentarz</span>
            <input
              type="textarea"
              name="comment"
              placeholder="Wprowadź tekst"
              className="index-modal-form__commentplace"
            />
          </label>
          <label className="index-modal-form__label index-modal-form__label--checkbox">
            <input
              name="checkbox"
              type="checkbox"
              className="index-modal-form__checkbox"
              required
            />
            <p className="index-modal-form__policytext">
              Oświadczam iż akceptuję{" "}
              <span className="index-modal-form__span">Regulamin</span> i{" "}
              <span className="index-modal-form__span">
                Politykę Prywatności
              </span>
              .
            </p>
          </label>
          <button className="index-modal-form__button" type="submit">
            Wyślij
          </button>
        </form>
        <button
          className="index-modal-form__closebtn"
          type="button"
          data-modal-close
        >
          <div className="index-modal-form__x">X</div>
        </button>
      </div>
    </div>
  );
};
