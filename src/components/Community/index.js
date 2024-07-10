import React from "react";
import styles from "./styles.module.scss";

const CommunityComp = () => {
  return (
    <div className={styles.commuintyContainer}>
      <div className="container">
        <h2 className="page-title">Join the Eclipse XFSC Community! </h2>

        <div className={styles.commuintyBody}>
          <p>
            Become part of an innovative open-source project shaping the future of technology. Collaborate with experts, grow your skills, and make a real impact. Let's build the future together! 
          </p>

          <h3 className="sub-header">Communication rules</h3>

          <p>
            A pre-requisite for joining the Tractus-X communication channels is an Eclipse Foundation Account.
          </p>

          <p>
            In addition, we encourage you to sign the Eclipse Contribution Agreement (ECA) to contribute to our Tractus-X project. For example, report and fix bugs or implement enhancements according to the Tractus-X roadmap. See our contributing guide. 
          </p>

          <ul>
            <li>
              - For a first contact please use our Tractus-X mailing list (tractusx-dev@eclipse.org) to get in touch with our   community or a specific product team you want to contribute. 
            </li>
            <li>
              - For quick and informal syncs please use our Eclipse Matrix Space to align on easy topics, ask questions, share a link or a bite-size piece of information. 
            </li>
          </ul>

          <h3 className="sub-header">
            Open meetings
          </h3>

          <p>
            Community Matrix channel: <a href="https://app.element.io/#/room/!flmTthUebPfZFnEyxM:matrix.org" target="_blank">the XFSC Developers' Community Chat </a>
          </p>

          <p>
            Catalogue WG call: <a href="https://gitlab.eclipse.org/eclipse/xfsc/cat/fc-service/-/wikis/XFSC-Catalogue-Developers'-Community-Call-Meetings" target="_blank">https://gitlab.eclipse.org/eclipse/xfsc/cat/fc-service/-/wikis/XFSC-Catalogue-Developers'-Community-Call-Meetings</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunityComp;
