import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout page="home">
      <h1>Rana Jurjus</h1>
      <p>
        Hi there, I'm Rana {"(she/her)"}! Welcome to my little corner of the
        internet.
      </p>
      <p>
        By day, I'm a software engineer with a heavy focus on front-end
        devlopment. By night, I'm a freelance French hornist, and you can catch
        me playing in a handful of local ensembles and orchestras around
        Pittsburgh.
      </p>
    </Layout>
  );
}
