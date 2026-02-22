'use client'

import { type SIDEBAR_ITEM } from "@/constants/layout"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo } from "react"

type Props = {
    item: SIDEBAR_ITEM
}

function SidebarItem({ item }: Props) {
    const pathname = usePathname()

    const active = useMemo(() => {
        if (item.url === "/") {
            return pathname === "/"
        }
        return pathname.startsWith(item.url)
    }, [pathname, item])

  return (
    <Link href={item.url} className="flex flex-col gap-0.5 justify-center items-center">
        <Image src={active ? item.activeIcon : item.icon} alt={item.name} width={24} height={24} priority />
        <p className="text-xs font-medium text-center">{item.name}</p>
    </Link>
  )
}

export default SidebarItem