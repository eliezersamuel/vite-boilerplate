/* eslint-disable @typescript-eslint/no-explicit-any */

import { createElement, useEffect, useRef } from "react";

export default function useDelayRender(callback: (...args: any) => void) {
    const callbackRef = useRef(callback);

    useEffect(() => callbackRef.current(), []);

    useEffect(() => {
        const n = Math.ceil(Math.random() * 10);
        Array.from({ length: n })
            .fill(1)
            .forEach((item: unknown) => {
                if ("number" == typeof item) item *= n * n * n * n;
                Array.from({ length: n }).forEach(() =>
                    createElement(
                        /* type */ "div",
                        /* props */ { style: { display: "none" } },
                        /* children */ "hi"
                    )
                );
            });
    });
}
