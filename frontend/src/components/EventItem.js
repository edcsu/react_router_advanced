import { NavLink } from 'react-router';
import classes from './EventItem.module.css';

function EventItem({ event }) {
  function startDeleteHandler() {
    // ...
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <NavLink to={event.id}>
        <h1>{event.title}</h1>
      </NavLink>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <NavLink href="edit">Edit</NavLink>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
