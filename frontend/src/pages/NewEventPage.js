import { redirect } from "react-router"
import EventForm from "../components/EventForm"

const NewEventPage = () => {
  return (
    <>
        <EventForm />
    </>
  )
}

export default NewEventPage

export const action = async({request, params}) => {
  const data = await request.formData()

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description')
  }

  const response = await fetch('http://localhost:8080/events/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData)
  });
  
  if (!response.ok) {
      const body = { message: 'Could not save the event' }
    const myOptions = { status: 500, statusText: "Something failed" };
    // throw new Response(JSON.stringify(body), myOptions)
    return Response.json(body, myOptions)
  } 

  return redirect('/events')
}