import { Suspense } from 'react';
import {  defer, useLoaderData, Await } from 'react-router';

import EventsList from '../components/EventsList';

function EventsPage() {
  const { events } = useLoaderData()

  return (
    <>
      <Suspense fallback={<p style={{textAlign: 'center'}}>Loading....</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadEvents} />}
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
        return response
    }
}

export const loader = () => {
  defer({
    events: loadEvents()
  })
}

