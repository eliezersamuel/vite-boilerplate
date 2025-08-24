import { useRef, memo } from "react";
import useDelayRender from "../../hooks/useDelayRender";
import * as S from "./style.css";
import type { THandleFieldsArg } from "../Parent";

export type TFields = {
    title: string;
    body: string;
    description: string;
};
export type TSetFields = (arg: Partial<THandleFieldsArg>) => void;
export interface IChild {
    handleFields: TSetFields;
}

export default memo(function Child({ handleFields }: IChild) {
    useDelayRender(() => console.log("Child Render"));
    const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

    const setRef = (name: string) => (el: HTMLInputElement | null) => {
        inputRefs.current[name] = el;
    };

    return (
        <div className={S.Container}>
            <h1>Child</h1>
            <div className={S.InputWrapper}>
                <label className={S.Label} htmlFor="title">
                    Title:
                </label>
                <input
                    type="text"
                    ref={setRef("title")}
                    id="title"
                    className={S.Input}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleFields({ title: event.target.value })
                    }
                />
            </div>
            <div className={S.InputWrapper}>
                <label className={S.Label} htmlFor="description">
                    Description:
                </label>
                <input
                    type="text"
                    ref={setRef("description")}
                    id="description"
                    className={S.Input}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleFields({ description: event.target.value })
                    }
                />
            </div>
            <div className={S.InputWrapper}>
                <label className={S.Label} htmlFor="body">
                    Body:
                </label>
                <input
                    type="text"
                    ref={setRef("body")}
                    id="body"
                    className={S.Input}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleFields({ body: event.target.value })
                    }
                />
            </div>
        </div>
    );
});
