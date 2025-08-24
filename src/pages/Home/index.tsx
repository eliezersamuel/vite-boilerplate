import Parent from "../../components/Parent";
import Child from "../../components/Child";

import * as S from "./style.css";
import useDelayRender from "../../hooks/useDelayRender";

export default function Home() {
    useDelayRender(() => console.log("Home Render"));
    return (
        <div className={S.Container}>
            <Parent>{(s) => <Child handleFields={s} />}</Parent>
        </div>
    );
}
