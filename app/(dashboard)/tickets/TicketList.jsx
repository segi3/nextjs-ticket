import Link from "next/link"

async function getTickets () {

  // imitate delay
  // await new Promise(resolve => setTimeout(resolve, 3000))

  const res = await fetch('http://localhost:4000/tickets', {
    next: {
      revalidate: 0 // 0s cache
    }
  })
  
  return res.json()
}

export default async function TicketList() {

  const tickets = await getTickets()
  
  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p> {/*// slice paragraph body from index 0 to 200 */}

            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}

      {tickets.length === 0 && (
        <p className="text-center">
          There are no open tickets
        </p>
      )}
    </>
  )
}

