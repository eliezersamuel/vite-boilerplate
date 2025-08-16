import * as S from "./style.css";
import { useUserStore } from "../../stores/userStore";
import { useQueryState, parseAsString } from "nuqs";

export default function Home() {
    const { name, changeName } = useUserStore();
    const [n] = useQueryState("n", parseAsString.withDefault(""));

    changeName(n);

    const mode = import.meta.env.VITE_NODE_MODE;
    console.log(mode);
    return (
        <div className={S.Container}>
            <h1>Welcome {name} </h1>
            <h2>Mode: {mode}</h2>
        </div>
    );
}
