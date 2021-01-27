import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { operations, selectors } from '../redux';


function ContactForm () {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contactsItems = useSelector(state => selectors.getContacts(state));
    const disratch = useDispatch();

    const handleChangeName = event => {
        setName(event.currentTarget.value);
    };

    const handleChangeNumber = event => {
        setNumber(event.currentTarget.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (contactsItems.find(cont => cont.name === name)) {
            alert(`${name} is already in contacts`);
         return
         };
        disratch(operations.formSubmit({ name, number }));
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (<form className="formBlock" onSubmit={handleSubmit}>
        <label className="labelBlock">
              Name <input
                type="text"
                value={name}
                onChange={handleChangeName}
                name="name"
                className="inputStyles" />
        </label>
        <label className="labelBlock">
              Number <input
                type="tel"
                value={number}
                onChange={handleChangeNumber}
                name="number"
                className="inputStyles" />
        </label>
        <button type="submit" className="button" disabled={!name || !number}>Add contact</button>
      </form> )
}

export default ContactForm;