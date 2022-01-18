import PropTypes from "prop-types";
import { FilterLabel, FilterInput } from "./Filter.styled";

const Filter = ({ onChangeFilter }) => {
  return (
    <FilterLabel>
      Filter contacts
      <FilterInput type="text" onChange={onChangeFilter} />
    </FilterLabel>
  );
};

export default Filter;

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};
