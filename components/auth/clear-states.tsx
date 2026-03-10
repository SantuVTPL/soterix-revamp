'use client'

import useUser from "@/store/user"
import { useEffect } from "react"

function ClearStates() {
    const clearUser = useUser(state => state.clearUser)

    useEffect(() => {
        clearUser()
    }, [clearUser])
  return null
}

export default ClearStates