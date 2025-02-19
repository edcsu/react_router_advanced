import { useParams } from "react-router"

const EventDetailPage = () => {
    const params = useParams()

    return (
        <>
            <h1>EventID:</h1>
            <h1>{params.id}</h1>
        </>
    )
}

export default EventDetailPage