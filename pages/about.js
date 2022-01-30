import Layout from "../components/Layout";
import styles from "../styles/About.module.css";

function Question({ question, children }) {
  return (
    <details>
      <summary>{question}</summary>
      {children}
    </details>
  );
}

export default function About() {
  return (
    <Layout page="about">
      <h1>About me</h1>
      <main className={`${styles.content}`}>
        <p>
          I grew up with a twin sister in the outskirts of Cleveland. Throughout
          my childhood, I developed a passion for performing music. Cool shit
          about my life.
        </p>
        <p>
          If I'm not in front of my computer building out websites with cool
          tools like NextJS, you'll likely find me playing video games, petting
          my cat Linus, exploring Pittsburgh's food scene with my husband Sam,
          or arranging my favorite video game music for french horn quartets.
        </p>
        <Question
          question="Gee Rana... if you studied music for so long, why did you pick up
        programming?"
        >
          Great question, my friend! Do you remember Neopets? My first brushes
          with front-end development came from me trying to beautify my Neopet's
          page. Ever since then, programming always seemed to find its way way
          back into my life. I took my first true Web Development course in
          undergrad as a break from all my music classes, and actually selected
          Carnegie Mellon University for my Music masters program, with the hope
          of getting into a few computer science courses while I was there.
        </Question>
        <Question question="What are your favorite video games?">
          What a fantastic question! I'm a big Nintendo fan, so you can usually
          find me playing Zelda, Pokémon, Animal Crossing or Mario shortly
          following any new release. I also love to play League of Legends with
          my friends!
        </Question>
      </main>
    </Layout>
  );
}
