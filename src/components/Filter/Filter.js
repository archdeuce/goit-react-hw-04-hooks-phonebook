import PropTypes from 'prop-types';
import './Filter.css';

export default function Filter({ onFilterChanged }) {
  const inputHandler = e => {
    onFilterChanged(e.target.value);
  };

  return (
    <div className="Filter__container">
      <label className="Filter__label" htmlFor="filterId">
        Find contacts by name:
      </label>
      <input
        className="Filter__input"
        id="filterId"
        type="text"
        autoComplete="off"
        onChange={inputHandler}
      ></input>
    </div>
  );
}

Filter.propTypes = {
  onFilterChanged: PropTypes.func.isRequired,
};
