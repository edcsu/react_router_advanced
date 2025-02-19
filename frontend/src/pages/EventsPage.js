import React from 'react'
import EventItem from '../components/EventItem'

const eventsList = [
    {
        id: '60bc83f2-9fa5-48a0-a613-8d6ad980d281',
        title: 'Beach carnival',
        date: '2025-03-15',
        description: 'Party in the sand',
        image: ''
    },
    {
        id: 'c253fc6d-e859-4312-b668-b18719692701',
        title: 'Burna boy concert',
        date: '2025-03-21',
        description: 'Afrobeats star on stage',
        image: ''
    },
    {
        id: '02bcc564-0800-4a01-a5a9-5cd9e9cf5765',
        title: 'Safari rally',
        date: '2025-03-31',
        description: 'WRC rally event',
        image: ''
    }
]

const EventsPage = () => {
  return (
    <>
        <h1>Events</h1>
        {eventsList.map((event) => (
            <EventItem event={event} />
        ))}
    </>
  )
}

export default EventsPage