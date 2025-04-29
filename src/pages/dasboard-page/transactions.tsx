"use client";

// import { useAppSelector } from "@/lib/redux/hooks";
// import { fetchOrganizerTransactions } from "./component/transaction.service";
import DashboardLayout from "./layout/dashboardLayout";
import { useEffect, useState } from "react";

interface Transaction {
  id: string;
  user: { first_name: string; last_name: string };
  ticket_type: { name: string; price: number };
  status: string;
  total_price: number;
  proof_url?: string;
}

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // const { token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    // Simulasi dummy data
    const dummy: Transaction[] = [
      {
        id: "trx1",
        user: { first_name: "Ali", last_name: "Yusuf" },
        ticket_type: { name: "VIP", price: 50000 },
        total_price: 50000,
        status: "WAITING_CONFIRMATION",
        proof_url: "/bukti/bayar1.jpg",
      },
      {
        id: "trx2",
        user: { first_name: "Rina", last_name: "Amalia" },
        ticket_type: { name: "Regular", price: 30000 },
        total_price: 30000,
        status: "DONE",
      },
    ];

    setTransactions(dummy);
  }, []);

  // const handleApprove = async (id: string) => { /* ... */ }
  // const handleReject = async (id: string) => { /* ... */ }

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">User Transactions (Preview)</h1>
      <div className="overflow-x-auto bg-white shadow-md rounded p-4">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">User</th>
              <th className="p-2">Ticket</th>
              <th className="p-2">Price</th>
              <th className="p-2">Status</th>
              <th className="p-2">Proof</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((trx) => (
              <tr key={trx.id} className="border-t">
                <td className="p-2">
                  {trx.user.first_name} {trx.user.last_name}
                </td>
                <td className="p-2">{trx.ticket_type.name}</td>
                <td className="p-2">{trx.total_price}</td>
                <td className="p-2">{trx.status}</td>
                <td className="p-2">
                  {trx.proof_url ? (
                    <a
                      href={trx.proof_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      View Proof
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
                <td className="p-2 space-x-2">
                  {trx.status === "WAITING_CONFIRMATION" && (
                    <>
                      {/* <button onClick={() => handleApprove(trx.id)} ...> */}
                      <button className="bg-green-500 text-white px-3 py-1 rounded">
                        Approve
                      </button>
                      {/* <button onClick={() => handleReject(trx.id)} ...> */}
                      <button className="bg-red-500 text-white px-3 py-1 rounded">
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
