import { ReactNode } from "react";
import styles from "./Layout.module.scss";

type Props = {
  ver?: boolean;
  children?: ReactNode;
};

const Section = ({ ver, children }: Props) => {
  return (
    <section className={styles.layout_section}>
      <div className={styles.layout_container}>
        <div className={`${styles.layout_wrapper} ${ver ? styles.ver : ""}`}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
