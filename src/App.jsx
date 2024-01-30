import { useState } from 'react';
import './App.css';
import { ContactList } from './components/contactlist/contactlist';
import { SearchBox } from './components/searchbox/searchbox';

const users = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [filterUsers, setFilterUsers] = useState(users);

  // const handleChange = evt => {
  //   setInputValue(evt.target.value);
  // };

  // console.log(inputValue);

  const visibleUsers = filterUsers.filter(filterUser =>
    filterUser.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>

      {/* <ContactForm /> */}

      {/* <SearchBox value={inputValue} onChange={setInputValue} /> */}

      <div>
        <p>Find contacts by name</p>
        <input
          type="text"
          value={inputValue}
          onChange={evt => setInputValue(evt.target.value)}
        />
      </div>

      <ContactList users={visibleUsers} />
    </div>
  );
};
