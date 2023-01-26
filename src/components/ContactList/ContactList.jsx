import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, removeContact }) => {
  return (
    <div>
      <ul className={css.list}>
        {contacts.map(contact => {
          return (
            <Contact
              contact={contact}
              key={contact.id}
              removeContact={removeContact}
            />
          );
        })}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func.isRequired,
};

export default ContactList;
