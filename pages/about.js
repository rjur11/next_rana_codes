import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout page="about">
      <h1>About me</h1>
      <p>
        Hi there, I'm Rana {"(she/her)"}! <br></br>
        By day, I'm a software engineer with a heavy focus on front-end
        devlopment. By night, I'm a freelance French hornist, and you can catch
        me playing in a handful of local ensembles and orchestras. <br></br>
        If I'm not in front of my computer building out websites with cool tools
        like NextJS, you'll likely find me playing video games, petting my cat
        Linus, exploring Pittsburgh's food scene with my husband Sam, or
        arranging my favorite video game music for french horn quartets.{" "}
        <br></br>
        {/* "Gee Rana... if you studied music for so long, why did you pick up
        programming?" Great question, my friend! Do you remember Neopets? My
        first brushes with front-end development came from me trying to
        "beautify" my Neopet's page. Ever since then, programming always seemed
        to find its way way back into my life. I took my first true Web
        Development course in undergrad as a break from all my music classes,
        and actually selected Carnegie Mellon University for my Music masters
        program, with the hope of getting into a few computer science courses
        while I was there. */}
      </p>
    </Layout>
  );
}
