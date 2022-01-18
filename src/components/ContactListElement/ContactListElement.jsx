import PropTypes from "prop-types";
import { ListBox, ContactBtn } from "./ContactListElement.styled";
import { MdOutlineDeleteForever } from "react-icons/md";

const ContactListElement = ({ id, name, number, deleteContact }) => (
  <li>
    <ListBox>
      <span>{name}: </span>
      {number}
      <ContactBtn type="button" onClick={() => deleteContact(id)}>
        <MdOutlineDeleteForever size={20} color="#F5F5F5" />
      </ContactBtn>
    </ListBox>
  </li>
);

export default ContactListElement;

ContactListElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
