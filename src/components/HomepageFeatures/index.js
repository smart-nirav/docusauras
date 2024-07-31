import Link from "@docusaurus/Link";
import JoinCommunity from "../JoinCommunity";
import XfscServices from "../XfscService";
import styles from "./styles.module.scss";

const HomepageFeatures = () => {
  return (
    <section>
      <div className={styles.homeContainer}>
        <h1>Welcome to the Eclipse XFSC Developer Hub!</h1>
        <p>
          Dive into our open-source playground where you’ll find everything you
          need to get started with Eclipse XFSC. Discover how XFSC’s integration
          with the Eclipse Foundation empowers innovation, and get the scoop on
          contributing, collaborating, and releasing software within our
          ecosystem.
        </p>

        <p>
          Got questions or eager to connect with fellow developers? Check out
          the <Link to="/community">Community</Link> page. It’s your portal to
          engaging with our project, tapping into our collective knowledge, and
          exploring opportunities to shape the future of technology together.
        </p>

        <p>
          Jump into the Eclipse XFSC community and let’s build the next
          generation of tech!
        </p>

        <Link
          to="https://projects.eclipse.org/projects/technology.xfsc"
          target="_blank"
          className="primaryBtn"
        >
          About XFSC
        </Link>
      </div>
      <JoinCommunity />

      <XfscServices />
    </section>
  );
};

export default HomepageFeatures;
