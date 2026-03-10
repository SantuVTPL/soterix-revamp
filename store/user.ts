import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export interface User {
    userId: string;
    profileId: number;
    profileName: string;
    priority: number;
    superadmin: boolean;
    name: string;
    lastName: string;
    address: {
        [key:string]: string;
    };
    mailId: string;
    mobile: string;
    profilePicId?: string;
    profilePicture?: string;
    userType: number;
    timelineTimeoutInMin: number;
}

export interface Enterprise {
    enterpriseId: number;
    name: string;
    logoId: string;
    address: {
        addressline1: string;
        addressline2: string;
        city: string;
        state: string;
        country: string;
        postalcode: string;
    };
    contact: {
        countrycode: string;
        phone: {
            stdCode: string;
            number: string;
        };
        mobile: {
            number: string;
            isverified: boolean;
        }[];
        email: {
            id: string;
            isverified: boolean;
        }[];
    };
}

export interface Site {
    siteId: number;
    name: string;
}

interface UserState {
    user: User | null;
    enterprises: Enterprise[];
    sites: Site[];
    setUser: (user: User) => void;
    setEnterprises: (enterprises: Enterprise[]) => void;
    setSites: (sites: Site[]) => void;
    clearUser: () => void;
}

const useUser = create<UserState>()(devtools(immer((set) => ({
    user: null,
    enterprises: [],
    sites: [],
    setUser: (user: User) => set((state) => { state.user = user }),
    setEnterprises: (enterprises: Enterprise[]) => set((state) => { state.enterprises = enterprises }),
    setSites: (sites: Site[]) => set((state) => { state.sites = sites }),
    clearUser: () => set((state) => {
        state.user = null;
        state.enterprises = [];
        state.sites = [];
    })
})), { name: "User" }))

export default useUser