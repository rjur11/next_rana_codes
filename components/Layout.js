import Link from "next/Link";

function NavLink({ href, title, nolink }) {
  return (
    <>
      <style jsx>{`
        li {
          padding: 10px;
        }
      `}</style>
      <li>
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
    <div>
      <style jsx>{`
        main {
          left: 60%;
          transform: translateX(-50%);
          position: absolute;
          text-align: center;
          top: 30%;
        }
        div {
          background: lightgreen;
          display: flex;
          height: 100vh;
        }
        .content {
          flex: 1;
        }
        aside {
          background: white;
          border: 2px dashed blue;
          padding: 30px;
        }
        ul {
          list-style-type: none;
        }
      `}</style>
      <aside>
        <h1>Rana Codes</h1>
        <nav>
          <ul>
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
            <NavLink
              href="/contact"
              title="Contact Me"
              nolink={page === "contact"}
            />
          </ul>
        </nav>
      </aside>
      <div class="content">
        <main>{children}</main>
      </div>
    </div>
  );
}
