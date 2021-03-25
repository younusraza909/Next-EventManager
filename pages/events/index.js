import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventItem from "../../components/events/EventItem";

const AllEventsPage = () => {
  const events = getAllEvents();
  return (
    <div>
      <EventList items={events} />
    </div>
  );
};

export default AllEventsPage;
