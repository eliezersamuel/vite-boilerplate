import { useCallback, useEffect, useMemo, useState } from "react";
import type { TSetFields } from "../Child";
import { useFields } from "../../stores/useFields";
import useDelayRender from "../../hooks/useDelayRender";
import { debounce } from "lodash";

export type TFields = {
    title: string;
    body: string;
    description: string;
};
//[key: PropertyKey]: string;
export type TFieldsKeys = keyof TFields;

export type THandleFieldsArg = { [K in TFieldsKeys]: string };

export default function Parent({
    children,
}: {
    children: (s: TSetFields) => React.ReactNode;
}) {
    const { body, title, description, changeState } = useFields();

    const [fields, setfields] = useState<TFields>({
        title,
        body,
        description,
    });

    useDelayRender(() => console.log("Parent Render"));

    useEffect(() => {
        changeState(fields);
    }, [changeState, fields]);

    // cria o debounced update uma vez
    const debouncedUpdate = useMemo(
        () =>
            debounce((patch: Partial<TFields>) => {
                setfields((prev) => ({ ...prev, ...patch }));
            }, 500),
        []
    );

    const handleFields = useCallback(
        (patch: Partial<TFields>) => {
            debouncedUpdate(patch); // só chama aqui
        },
        [debouncedUpdate]
    );

    return (
        <>
            <h1>Parent</h1>
            {children(handleFields)}
        </>
    );
}
