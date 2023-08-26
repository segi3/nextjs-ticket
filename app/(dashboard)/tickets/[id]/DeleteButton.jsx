"use client"

import { useTransition } from "react"
import { useRouter } from "next/navigation"
import { useState } from "react"

import { deleteTicket } from "../actions"

import { TiDelete  } from "react-icons/ti"

export default function DeleteButton({ id }) {

  let [isPending, startTransition] = useTransition()

  return (
    <button
      className="btn-primary"
      onClick={() => startTransition(() => deleteTicket(id))}
      disabled={isPending}
    >
      {isPending && (
        <>
          <TiDelete />
          Deleting...
        </>
      )}

      {!isPending && (
        <>
          <TiDelete />
          Delete ticket
        </>
      )}
    </button>
  )
}