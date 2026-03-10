'use client'

import useUser, { Enterprise, Site, User } from "@/store/user"
import { useEffect } from "react";

type Props = {
    user: User;
    enterprises: Enterprise[];
    sites: Site[];
}

function InitializeStates({
    user,
    enterprises,
    sites
}: Props) {
    const setUser = useUser(state => state.setUser)
    const setEnterprises = useUser(state => state.setEnterprises)
    const setSites = useUser(state => state.setSites)

    useEffect(() => {
        setUser(user)
    }, [user, setUser])
    
    useEffect(() => {
        setEnterprises(enterprises)
    }, [enterprises, setEnterprises])

    useEffect(() => {
        setSites(sites)
    }, [sites, setSites])

  return null
}

export default InitializeStates