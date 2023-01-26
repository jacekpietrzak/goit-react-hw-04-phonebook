import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const DATA = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useState(DATA);
  const [filter, setFilter] = useState('');

  const handleFilter = event => {
    setFilter(event.target.value.toLowerCase());
  };

  const addContact = contact => {
    const newContact = {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    };

    const checkName = contacts.find(
      contact => contact.name === newContact.name
    );

    if (checkName !== undefined) {
      return alert(`${checkName.name} is already in contacts.`);
    }

    setContacts([newContact, ...contacts]);
  };

  const removeContact = event => {
    let filteredArray = contacts.filter(item => item.id !== event.target.id);
    setContacts(filteredArray);
  };

  //Component Did Mount Hook
  useEffect(() => {
    const localStorageContacts = JSON.parse(localStorage.getItem('contacts'));
    console.log('From did mount', localStorageContacts);
    if (localStorageContacts) {
      setContacts(localStorageContacts);
    }
  }, []);

  //Component Did Update Hook
  useEffect(() => {
    const localStorageContacts = contacts;
    localStorage.setItem('contacts', JSON.stringify(localStorageContacts));
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <div className={css.App}>
      <h1 className={css.h1}>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2 className={css.h2}>Contacts</h2>
      <Filter handleFilter={handleFilter} />
      <ContactList contacts={filteredContacts} removeContact={removeContact} />
    </div>
  );
};

export default App;
