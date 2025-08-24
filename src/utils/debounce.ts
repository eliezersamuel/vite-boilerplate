/* eslint-disable @typescript-eslint/no-explicit-any */
export function debounce(callback: (args: any) => void, delay = 100) {
    let timeout: NodeJS.Timeout;

    return function (args: any) {
        clearTimeout(timeout);
        timeout = setTimeout(() => callback(args), delay);
    };
}
