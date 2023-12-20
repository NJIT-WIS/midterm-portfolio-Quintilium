import type { NextPage } from "next";
import styles from "./index.module.css";
import React from 'react'

const MacBookPro141: NextPage = () => {
  return (
    <div className={styles.macbookPro141}>
      <div className={styles.imJamesQuintas}>I’m James Quintas</div>
      <div className={styles.hello}>Hello!</div>
      <div className={styles.macbookPro141Child} />
      <img className={styles.e777e71Icon} alt="" src="/77e777e7-1@2x.png" />
      <div
        className={styles.aFreelanceIt}
      >{`A Freelance IT Specialist & Web Developer`}</div>
      <div className={styles.macbookPro141Item} />
      <b className={styles.iAmAContainer}>
        <p className={styles.iAmA}>{`I am a professional IT Developer `}</p>
        <p className={styles.iAmA}>with experience in multiple</p>
        <p
          className={styles.iAmA}
        >{`studies of computer based technology, I `}</p>
        <p className={styles.iAmA}>work to create innovative solutions</p>
        <p
          className={styles.iAmA}
        >{`to new tasks and tests that I face in thiscompetitive industry. I work hard to `}</p>
        <p className={styles.iAmA}>create easy to use and polished products</p>
      </b>
      <div className={styles.macbookPro141Inner} />
      <a
        className={styles.twitter}
        href="https://twitter.com/Quintilium"
        target="_blank"
      >{`Twitter `}</a>
      <a
        className={styles.github}
        href="https://github.com/Quintilium"
        target="_blank"
      >
        GitHub
      </a>
      <a
        className={styles.linkedin}
        href="https://www.linkedin.com/in/james-quintas-4557a5296/"
        target="_blank"
      >
        Linkedin
      </a>
      <div className={styles.ellipseDiv} />
      <a
        className={styles.resume}
        href="https://docs.google.com/document/d/1kCHOIup6azTlGNarbBLq_YI9RCjOWwhGAL-0WWTGnvM/edit?usp=sharing"
        target="_blank"
      >
        Resume
      </a>
    </div>
  );
};

export default MacBookPro141;
