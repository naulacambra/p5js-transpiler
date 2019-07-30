import Transpiler from "./components/transpiler";
import Examples from "./components/examples";

export default [{
        path: "/",
        component: Transpiler,
        props: true
    },
    {
        path: "/transpiler/:exampleId",
        component: Transpiler,
        props: true
    },
    {
        path: "/examples",
        component: Examples
    },
];