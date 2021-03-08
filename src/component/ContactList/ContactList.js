import React from "react";
import PropTypes from "prop-types";

import styles from "./ContactList.module.css";

const ContactList = ({ deleteContact, options }) => {
  return (
    <ul className={styles.contactList}>
      {options.map(({ name, number, id }) => (
        <li key={name} className={styles.contactItem}>
          <p className={styles.text}>
            {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => {
              deleteContact(id);
            }}
            className={styles.deleteBtn}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
