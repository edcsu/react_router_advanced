
import { useLoaderData } from 'react-router';
import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData()

  if (data.isError) {
    return (
        <p>data.message</p>
    )
  }

  const events = data.events

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export const loader = async () => {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
      const myOptions = { status: 500, statusText: "Something failed" };
      throw new Response(JSON.stringify({
          message: 'Could not fetch events'
      }), myOptions)
    } else {
        return response
    }
}

