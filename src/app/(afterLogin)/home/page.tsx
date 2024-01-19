import style from "./home.module.css"
import Tab from "@/app/(afterLogin)/home/_component/Tab";
import TabProvider from "@/app/(afterLogin)/home/_component/TabProvider";

export default function Home() {
    return (
        <main className={style.container}>
            <TabProvider>
                <Tab/>
                {/*<PostForm/>*/}
                {/*<Post/>*/}
            </TabProvider>
        </main>
    )
}
