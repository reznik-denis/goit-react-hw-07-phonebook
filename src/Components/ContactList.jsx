import {useEffect} from 'react';
import ButtonDelete from './ButtonDelete';
import { useSelector, useDispatch } from 'react-redux';
import { operations, selectors } from "../redux";

function ContactList() {
    const contacts = useSelector(selectors.getVisibleContacts);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(operations.fetchContact());
    }, [dispatch]);
    
    return (contacts.length > 0 && (<ul className="list">
            {contacts.map(({id, name, number}) => (
              <li key={id} className="listItem">{name}: {number}
                    <ButtonDelete id={id}/>
              </li>
              ))}
          </ul>))
};

export default ContactList;