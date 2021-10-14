import React from "react";
import PropTypes from "prop-types";
import { FilterStyled } from "./FilterStyled";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/contacts/contactsActions";

const Filter = ({ filter, changeFilter }) => {
  const onChangeFilter = (e) => {
    const { value } = e.target;
    changeFilter(value);
  };
  return (
    <FilterStyled>
      <label>
        Find contacts by name
        <br />
        <input
          value={filter}
          onChange={onChangeFilter}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
    </FilterStyled>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func,
  filter: PropTypes.string,
};

const mapStateToProps = (state) => ({
  filter: state.contacts.filter,
});

export default connect(mapStateToProps, { changeFilter })(Filter);
