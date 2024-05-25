import { FormEvent, useState } from "react";
import "./SearchCityCmponent.scss";

interface Props {
  submit: (inputVal: string) => void;
}

const SearchCityComponent = ({ submit }: Props) => {
  const [inputVal, setInputVal] = useState<string>("");

  const onSubmitInputTitle = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submit(inputVal);
  };

  return (
    <>
      <form className="form" onSubmit={onSubmitInputTitle}>
        <input
          id="cityTitle"
          className="cityTitle"
          type="text"
          value={inputVal}
          name="city"
          placeholder="Search your city"
          onChange={(e) => setInputVal(e.target.value)}
        />

        <button type="submit" className="button">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchCityComponent;
