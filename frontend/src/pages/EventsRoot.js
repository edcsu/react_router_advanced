import { Outlet } from 'react-router'

import EventsNaviagtion from '../components/EventsNavigation'

const EventsRoot = () => {
  return (
    <>
        <EventsNaviagtion />
        <Outlet />
    </>
  )
}

export default EventsRoot