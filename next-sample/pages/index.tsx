import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Link from "next/link";

type ButtonProps = {
    color: string
    backgroundColor: string
}


const Button = styled.button<ButtonProps> `
/* color, background, border-colorはpropsから渡す */
  color: ${(props) => props.color};
  background: ${(props) => props.backgroundColor};
  border: 2px solid ${(props) => props.color};

  font-size: 2em;
  margin: lem;
  padding 0.25em lem;
  border-radius: 8px;
  cursor: pointer;
`

const H1 = styled.h1`
  color: Red;
`;

const Badge = styled.span`
padding: 8px 16px;
front-weight: bold;
text-align: center;
background: red;
border-radius: 16px;
`

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

      <Button backgroundColor ="transparent" color="#FF0000">
        Hello
      </Button>

      <Button backgroundColor="#1E90FF" color = "white">
        World
      </Button>

      <main className={styles.main}>
        <Badge> 
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Badge>
      </main>
      </div>
          
    )
};

export default Home;
