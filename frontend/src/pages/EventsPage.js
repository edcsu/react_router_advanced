import { Suspense } from 'react';
import {  useLoaderData, Await } from 'react-router';

import EventsList from '../components/EventsList';

function EventsPage() {
  const { events } = useLoaderData()

  return (
    <>
      <Suspense fallback={<p style={{textAlign: 'center'}}>Loading....</p>}>
        <Await resolve={events}>
          {(foundEvents) => <EventsList events={foundEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventsPage;

const loadEvents = async() => {
  const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
      const body = { message: 'Could not fetch events' }
      const myOptions = { status: 500, statusText: "Something failed" };
      // throw new Response(JSON.stringify(body), myOptions)
      return Response.json(body, myOptions)
      
      // return json(body, myOptions)
    } else {
      const resData = await response.json()
      return resData.events
    }
}

export const loader = () => {
  return {
    events: loadEvents()
  }
}

