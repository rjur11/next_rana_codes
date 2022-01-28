import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout page="home">
      <h1>Home Page</h1>
      <p>Welcome to my little corner of the internet!</p>
    </Layout>
  );
}
