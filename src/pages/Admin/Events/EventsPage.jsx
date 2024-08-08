import EventTable from "@/components/admin/EventTable";
function EventsPage() {
  return (
    <div className="bg-white rounded-md h-[85vh] my-5 px-3">
      <div className="flex justify-between  items-center px-3 py-5">
        <h1 className="text-2xl  font-semibold">Events</h1>
      </div>
      <EventTable />
    </div>
  );
}

export default EventsPage;
