import React from "react"
import { useEffectAsync } from "../hooks/async-hooks"
import { getApiMembersList } from "../services/members"

export function Dashboard() {
  useEffectAsync(async () => {
    const members = await getApiMembersList()
    console.log(members)
  }, [])

  return (
    <div>
      <p>This is dashboard!</p>
    </div>
  )
}
