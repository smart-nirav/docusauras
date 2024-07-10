import Link from "@docusaurus/Link";
import JoinCommunity from "../JoinCommunity";
import XfscServices from "../XfscService";
import styles from "./styles.module.scss";

const HomepageFeatures = () => {
  return (
    <section>
      <div className={styles.homeContainer}>
        <h1>Welcome to XFSC</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore
        </p>

        <Link to="/about" className="primaryBtn">About XFSC</Link>
      </div>
      <JoinCommunity />

      <XfscServices />
    </section>
  );
};

export default HomepageFeatures;
