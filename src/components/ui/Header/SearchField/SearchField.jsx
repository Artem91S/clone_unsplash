import { useState } from "react";
import style from "./index.module.scss";
import { IoSearch } from "react-icons/io5";

function SearchField() {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(value);
  };

  return (
    <div className={style.conteiner}>
      <form className={style.search__form} onSubmit={handleSubmit}>
        <input
          className={style.form__input}
          type="text"
          placeholder="Search images"
          onChange={(e) => {
            setTimeout(() => {
              setValue(e.target.value);
            }, 2000);
          }}
        />
        <IoSearch   className={style.form__search} />
      </form>
    </div>
  );
}

export default SearchField;
