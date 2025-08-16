import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type State = { name: string };
type Actions = { changeName: (newName: string) => void };

export const useUserStore = create<
    State & Actions,
    [["zustand/devtools", never], ["zustand/immer", never]]
>(
    devtools(
        immer<State & Actions>((set) => ({
            name: "",
            changeName: (newName) =>
                set((state) => {
                    state.name = newName;
                }),
        })),
        { name: "UserStore" }
    )
);
