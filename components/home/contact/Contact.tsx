import Link from "next/link";
import { AiFillMail } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";
import { links } from "@/constants/links";
import styles from "./contact.module.scss";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Shoot me an email if you want to connect! You can also find me on{" "}
            <Link
              href={links.linkedIn}
              target="_blank"
              rel="nofollow"
              aria-label="Visit my LinkedIn profile (opens in a new tab)"
            >
              LinkedIn
            </Link>{" "}
            if that&apos;s more your speed.
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link href={`mailto:${links.email}`} aria-label="Send me an email">
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>{links.email}</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
