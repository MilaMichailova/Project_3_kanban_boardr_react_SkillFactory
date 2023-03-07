import { LIST_TYPES, LIST_COPY } from "../../config";
import css from "./Footer.module.css";

function Footer(props) {
  const { tasks } = props;
  return (
    <footer className={css.footer}>
      <div className={css.counts}>
        {Object.values(LIST_TYPES).map((type) => {
          const listTasks = tasks.filter((task) => task.status === type);
          if (!listTasks.length) return null;
          return (
            <p className={css.count} key={LIST_COPY[type]}>
              {LIST_COPY[type]}: {listTasks.length}
            </p>
          );
        })}
      </div>
      <div className={css.copy}>
        Kanban board by
        {/* <NAME>, <YEAR> */}{" "}
        <a
          href="https://www.google.com/search?q=%D1%82%D0%B5%D1%81%D1%82&oq=%D1%82%D0%B5%D1%81%D1%82&aqs=chrome..69i57j69i59.4550j0j7&sourceid=chrome&ie=UTF-8"
          target="_blank"
          rel="noreferrer"
        >
          @test
        </a>
      </div>
    </footer>
  );
}

export default Footer;
