import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventKist from "../../components/events/EventList";
import EventList from "../../components/events/EventList";

const FilteredEventPage = () => {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className='center'>Loading...</p>;
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  // + is use to convert it into month
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear > 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid Filtered, Please Adjust Your value</p>;
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });
  if (!filteredEvents || filteredEvents.length === 0) {
    return <p> No Events found for this filter!</p>;
  }
  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
};

export default FilteredEventPage;
