export type SIDEBAR_ITEM = {
    name: string;
    icon: string;
    activeIcon: string;
    url: string;
}

export const SIDEBAR_ITEMS = [
    {
        name: "Views",
        icon: '/assets/icons/view.png',
        activeIcon: '/assets/icons/view-active.png',
        url: '/',
    },
    {
        name: "Events",
        icon: '/assets/icons/event.png',
        activeIcon: '/assets/icons/event-active.png',
        url: '/event',
    },
    {
        name: "Maps",
        icon: '/assets/icons/map.png',
        activeIcon: '/assets/icons/map-active.png',
        url: '/map',
    },
    {
        name: "Insights",
        icon: '/assets/icons/insight.png',
        activeIcon: '/assets/icons/insight-active.png',
        url: '/insight',
    },
    {
        name: "Media",
        icon: '/assets/icons/media.png',
        activeIcon: '/assets/icons/media-active.png',
        url: '/media',
    },
    {
        name: "Search",
        icon: '/assets/icons/search.png',
        activeIcon: '/assets/icons/search-active.png',
        url: '/search',
    },
    {
        name: "LPR",
        icon: '/assets/icons/lpr.png',
        activeIcon: '/assets/icons/lpr-active.png',
        url: '/lpr',
    },
    {
        name: "Admin",
        icon: '/assets/icons/admin.png',
        activeIcon: '/assets/icons/admin-active.png',
        url: '/admin',
    },
]