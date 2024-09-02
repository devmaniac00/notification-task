import UserForm from "@/app/components/UserForm";

import styles from "./page.module.css";


export const metadata = {
    title: "Test task",
    description: "Page description, test task",
}


export default function Home() {
  return (
    <main className={styles.wrap}>
        <h1 className={styles.h1}>Test task</h1>

        <section className={styles.formBlock}>
            <UserForm/>
        </section>
    </main>
  );
}
