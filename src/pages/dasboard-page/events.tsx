"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "./layout/dashboardLayout";
// import { fetchOrganizerEvents } from "./component/event.service";
// import { useAppSelector } from "@/lib/redux/hooks";

interface Event {
  id: string;
  name: string;
  description: string;
  category: string;
  location: string;
  Pay: boolean;
  start_date: string;
  end_date: string;
  available_seats: number;
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);

  // const { token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const dummy: Event[] = [
      {
        id: "ev1",
        name: "JavaScript Conference",
        description: "A tech event",
        category: "Tech",
        location: "Jakarta",
        Pay: true,
        start_date: "2025-05-01T10:00:00",
        end_date: "2025-05-01T17:00:00",
        available_seats: 50,
      },
      {
        id: "ev2",
        name: "Startup Pitch Day",
        description: "Meet investors",
        category: "Business",
        location: "Bandung",
        Pay: false,
        start_date: "2025-06-10T13:00:00",
        end_date: "2025-06-10T18:00:00",
        available_seats: 80,
      },
    ];

    setEvents(dummy);
  }, []);

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">My Events (Preview)</h1>
      </div>

      <div className="bg-white p-4 rounded shadow overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Location</th>
              <th className="px-4 py-2 text-left">Start Date</th>
              <th className="px-4 py-2 text-left">End Date</th>
              <th className="px-4 py-2 text-left">Seats</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id} className="border-t">
                <td className="px-4 py-2">{event.name}</td>
                <td className="px-4 py-2">{event.category}</td>
                <td className="px-4 py-2">{event.location}</td>
                <td className="px-4 py-2">
                  {new Date(event.start_date).toLocaleDateString()}
                </td>
                <td className="px-4 py-2">
                  {new Date(event.end_date).toLocaleDateString()}
                </td>
                <td className="px-4 py-2">{event.available_seats}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
