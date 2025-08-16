/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useUserStore } from "../../stores/userStore";
import { useQueryState, parseAsString } from "nuqs";
import { useQuery } from "@tanstack/react-query";
import UserService from "../../services/UserService";
import { z } from "zod";

import * as S from "./style.css";
import type { AxiosResponse } from "axios";

const userSchema = z.object({
    id: z.string(),
    name: z.string(),
    phone: z.string(),
    email: z.string(),
    cpf: z.string(),
});

type userType = z.infer<typeof userSchema>;

const usersSchema = z.array(userSchema);

type usersType = z.infer<typeof usersSchema>;

export default function Home() {
    const { data } = useQuery<Partial<AxiosResponse<usersType>>>({
        queryKey: ["userService"],
        queryFn: async () => await UserService.getUsers(),
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60,
        initialData: {},
    });

    const [userFiltered, setUserFiltered] = useState<userType | undefined>();

    const { name, changeName } = useUserStore();
    const [n] = useQueryState("n", parseAsString.withDefault(""));

    const mode = import.meta.env.VITE_NODE_MODE;

    useEffect(() => {
        if (data?.statusText === "OK" && n && "data" in data) {
            changeName(n);
            const userFiltered = data?.data
                ?.filter((user) => user.name === n)
                .at(0);
            setUserFiltered(userFiltered);
        }
    }, [changeName, data, n]);

    return (
        <div className={S.Container}>
            <h1>Welcome {name} </h1>
            <h2>Mode: {mode}</h2>
            <pre>{JSON.stringify(userFiltered, null, 2)}</pre>
        </div>
    );
}
