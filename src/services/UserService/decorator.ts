/* eslint-disable @typescript-eslint/no-explicit-any */
/* function CustomDecorator(value: boolean) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        descriptor.enumerable = value;
    };
} */

export function CustomDecorator() {
    return function (...args: any) {
        console.log({ args });
    };
}
