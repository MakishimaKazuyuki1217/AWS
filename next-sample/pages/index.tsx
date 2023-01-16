import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Link from "next/link";

const H1 = styled.h1`
  color: Blue;
`;

const Links = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;

  & a {
    text-decoration: underline;
  }
`

const Home: NextPage = () => {
    return (

    <div className={styles.container}>
      <main className={styles.main}>
      ...
        <H1> 
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </H1>
      </main>
      </div>
          
    )
};

export default Home;
