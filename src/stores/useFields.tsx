import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import type { TFields } from "../components/Child";

type State = TFields;
type Actions = {
    changetitle: (newValue: string) => void;
    changebody: (newValue: string) => void;
    changedescription: (newValue: string) => void;
    changeState: (newvalue: Partial<TFields>) => void;
};

export const useFields = create<
    State & Actions,
    [["zustand/devtools", never], ["zustand/immer", never]]
>(
    devtools(
        immer<State & Actions>((set) => ({
            title: "",
            body: "",
            description: "",
            changetitle: (newValue) =>
                set((state) => {
                    state.title = newValue;
                }),
            changebody: (newValue) =>
                set((state) => {
                    state.body = newValue;
                }),
            changedescription: (newValue) =>
                set((state) => {
                    state.description = newValue;
                }),
            changeState: (newValue) =>
                set((state) => {
                    state.body = newValue?.body ?? state.body;
                    state.description =
                        newValue?.description ?? state.description;
                    state.title = newValue?.title ?? state.title;
                }),
        })),
        { name: "useFields" }
    )
);
