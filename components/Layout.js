import Image from "next/image";
import Link from "next/Link";
import portrait from "../public/images/me.jpeg";
import styles from "./Layout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function NavLink({ href, title, nolink }) {
  return (
    <>
      <li className={`${styles.li}`}>
        {nolink ? (
          <b>{title}</b>
        ) : (
          <Link href={href}>
            <a>{title}</a>
          </Link>
        )}
      </li>
    </>
  );
}
export default function Layout({ children, page }) {
  return (
    <div className={`${styles.div}`}>
      <aside className={`${styles.aside}`}>
        <div className={`${styles.topAside}`}>
          <Image
            src={portrait}
            alt="Picture of Rana Jurjus"
            placeholder="blur"
            width={200}
            height={200}
            className={`${styles.portrait}`}
          />
          <nav>
            <ul className={`${styles.ul}`}>
              <NavLink href="/" title="Home" nolink={page === "home"} />
              <NavLink href="/about" title="About" nolink={page === "about"} />
              <NavLink
                href="/projects"
                title="My Projects"
                nolink={page === "projects"}
              />
              <NavLink
                href="/skills"
                title="My Skills"
                nolink={page === "skills"}
              />
            </ul>
          </nav>
        </div>
        <div className={`${styles.socialLinks}`}>
          <a
            href="https://github.com/rjur11"
            className={`${styles.socialLink}`}
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/rana-jurjus/"
            className={`${styles.socialLink}`}
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </aside>
      <div className={`${styles.content}`}>
        <main className={`${styles.main}`}>{children}</main>
      </div>
    </div>
  );
}
