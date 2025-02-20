import { useParams, useRouteLoaderData } from "react-router"

import EventItem from '../components/EventItem'

const EventDetailPage = () => {
    const params = useParams()
    const data = useRouteLoaderData('event-detail')
    return (
        <>
            <EventItem event={data.event} />
        </>
    )
}

export default EventDetailPage

export const loader = async ({ request, params}) => {
    const id = params.id
    const response = await fetch(`http://localhost:8080/events/${id}`);
    if (!response.ok) {
        const body = { message: 'Could not fetch details for the event' }
      const myOptions = { status: 500, statusText: "Something failed" };
      // throw new Response(JSON.stringify(body), myOptions)
      return Response.json(body, myOptions)
    } else {
        return response
    }

}