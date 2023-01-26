import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ handleFilter }) => {
  return (
    <div className={css.filter}>
      <label className={css.label} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className={css.input}
        id="filter"
        type="text"
        name="filter"
        onChange={handleFilter}
      />
    </div>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;
