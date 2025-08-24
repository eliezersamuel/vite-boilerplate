import { style } from "@vanilla-extract/css";

export const Container = style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "90%",
    gap: "2rem",
});

export const InputWrapper = style({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: "2rem",
});

export const Input = style({
    fontSize: "1.6rem",
    width: "100%",
    padding: "0.5rem 1.5rem",
});

export const Label = style({
    fontSize: "2rem",
    fontWeight: "bold",
});
