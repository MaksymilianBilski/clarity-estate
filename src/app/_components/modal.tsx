export const Modal = () => {
  return (
    <div class="backdrop is-hidden" data-modal>
      <div class="modal">
        <form class="index-modal-form modal__item">
          <span class="index-modal-form__leavedata">
            Zostaw swoje dane w formularzu poniżej
          </span>
          <label for="user" class="index-modal-form__label">
            <span class="index-modal-form__user">Imie</span>
            <input
              type="textarea"
              class="index-modal-form__userarea index-modal-form__userarea--userplace"
              name="user"
              required
            >
              <svg width="18" height="18" class="index-modal-form__usersvg">
                <use href="images/sprite.svg#icon-person-black-18dp-1"></use>
              </svg>
            </input>
          </label>
          <label for="phone-number" class="index-modal-form__label">
            <span class="index-modal-form__tel">Telefon</span>
            <input
              type="tel"
              name="phone-number"
              class="index-modal-form__telarea index-modal-form__telarea--telplace"
              required
            >
              <svg width="18" height="18" class="index-modal-form__telsvg">
                <use href="images/sprite.svg#icon-phone-black-18dp-1"></use>
              </svg>
            </input>
          </label>
          <label for="email" class="index-modal-form__label">
            <span class="index-modal-form__tel">Email</span>
            <input
              type="email"
              class="index-modal-form__emailarea index-modal-form__emailarea--emailplace"
              name="email"
              required
            >
              <svg width="18" height="18" class="index-modal-form__emailsvg">
                <use href="images/sprite.svg#icon-email-black-18dp-1"></use>
              </svg>
            </input>
          </label>
          <label for="comment" class="index-modal-form">
            <span class="index-modal-form__comment">Komentarz</span>
            <input
              type="textarea"
              name="comment"
              placeholder="Wprowadź tekst"
              class="index-modal-form__commentplace"
            />
          </label>
          <label class="index-modal-form__label index-modal-form__label--checkbox">
            <input
              name="checkbox"
              type="checkbox"
              class="index-modal-form__checkbox"
              required
            />
            <p class="index-modal-form__policytext">
              Oświadczam iż akceptuję{" "}
              <span class="index-modal-form__span">Regulamin</span> i{" "}
              <span class="index-modal-form__span">Politykę Prywatności</span>.
            </p>
          </label>
          <button class="index-modal-form__button" type="submit">
            Wyślij
          </button>
        </form>
        <button
          class="index-modal-form__closebtn"
          type="button"
          data-modal-close
        >
          <div class="index-modal-form__x">X</div>
        </button>
      </div>
    </div>
  );
};
