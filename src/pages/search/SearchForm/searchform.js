import React, { useState } from "react";
import ResultList from "../ResultList/Resultlist";
import SearchFormStyle from "./SearchForm.module.css";

const SearchForm = () => {
  const [enteredData, setEnteredData] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleChangeInput = (event) => {
    setEnteredData(event.target.value);
  };

  const resetInput = () => {
    setEnteredData("");
    setShowResult(false);
  };

  const AcceptInput = () => {
    setShowResult(true);
  };

  return (
    <div>
      <div className={SearchFormStyle["background"]}>
        <div className={SearchFormStyle["app"]}>
          <div className={SearchFormStyle["banner"]}>
            <input
              className={SearchFormStyle["input"]}
              value={enteredData}
              type="text"
              id="name"
              onChange={handleChangeInput}
            />
            <p className={SearchFormStyle["logo"]}>
              <svg
                className="svg-inline--fa fa-search fa-w-16"
                fill="#ccc"
                aria-hidden="true"
                data-prefix="fas"
                data-icon="search"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </p>
          </div>
          <hr className={SearchFormStyle["hr"]}></hr>
          <div className={SearchFormStyle["button"]}>
            <button onClick={resetInput}>RESET</button>
            <button onClick={AcceptInput}>SEARCH</button>
          </div>
        </div>
      </div>
      <div>{showResult && <ResultList data={enteredData} />}</div>
    </div>
  );
};

export default SearchForm;
