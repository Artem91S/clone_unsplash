import { useState,useContext } from "react";
import style from "./index.module.scss";
import { IoSearch } from "react-icons/io5";
import { Quantity } from "../../../../router";
import { useNavigate } from "react-router-dom";

function SearchField() {
  const [value, setValue] = useState("");
  const [showSearch, setShowSearch]=useContext(Quantity)
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(showSearch);
    // console.log(value);
    setShowSearch(value)
      navigate('./search')

   
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
            }, 100);
          }}
        />
        <IoSearch className={style.form__search} />
      </form>
    </div>
  );
}

export default SearchField;
