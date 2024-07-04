import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "caua paiva",
      amount: 100,
      status: "pending",
      email: "caua@example.com",
    },
    {
      id: "Igor Paiva",
      amount: 50,
      status: "pending",
      email: "igor@example.com",
    },
    {
      id: "Fernando Paiva",
      amount: 25,
      status: "pending",
      email: "fernando@example.com",
    },
    {
      id: "Maria Paiva",
      amount: 12.5,
      status: "pending",
      email: "maria@example.com",
    },
    {
      id: "Alerrandro Paiva",
      amount: 6.25,
      status: "pending",
      email: "alerrando@example.com",
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
