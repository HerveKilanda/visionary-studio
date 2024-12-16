import {create} from "zustand"

const useScrollStore = create((set) => ({
    scrollDirection: "up",
    setScrollDirection: (direction: any) => set({ scrollDirection: direction }),
}))

export default useScrollStore