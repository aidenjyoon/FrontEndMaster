import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import styles from "../styles/Home.module.scss";

const HomePage = () => {
  return (
    <>
      <Head>
        {/* <!-- displays site properly based on user's device --> */}

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <title>Frontend Mentor | Interactive rating component</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* phosphor icons */}
        {/* <Script src="https://unpkg.com/phosphor-icons" /> */}
      </Head>

      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.card__content}>
            {/* <!-- Rating state  --> */}
            <div className={styles.card__rating}>
              <div className={styles.container__svg}>
                <Image
                  src="/icon-star.svg"
                  alt="SVG of star"
                  width={30}
                  height={30}
                />
              </div>

              <h1>How did we do?</h1>
              <p>
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
              <form>
                <div className={styles.container__radios}>
                  {/* 1 */}
                  <input type="radio" name="rating-1" id="1" value="1" />
                  <label htmlFor="1" className={styles.lbl_radio}>
                    <div className={styles.rating_num}>1</div>
                  </label>

                  {/* 2 */}
                  <input type="radio" name="rating-2" id="2" value="2" />
                  <label htmlFor="2" className={styles.lbl_radio}>
                    <div className={styles.rating_num}>2 </div>
                  </label>

                  {/* 3 */}
                  <input type="radio" name="rating-3" id="3" value="3" />
                  <label htmlFor="3" className={styles.lbl_radio}>
                    <div className={styles.rating_num}>3 </div>
                  </label>

                  {/* 4 */}
                  <input type="radio" name="rating-4" id="4" value="4" />
                  <label htmlFor="4" className={styles.lbl_radio}>
                    <div className={styles.rating_num}>4 </div>
                  </label>

                  {/* 5 */}
                  <input type="radio" name="rating-5" id="5" value="5" />
                  <label htmlFor="5" className={styles.lbl_radio}>
                    <div className={styles.rating_num}>5 </div>
                  </label>
                </div>

                <button>Submit</button>
              </form>
            </div>

            {/* <!-- Thank you state start --> *
            <div className={styles.card__thankyou}>
              <p>You selected</p>

              <p>
                {/* <!-- Add rating here --> *
                out of 5 Thank you!
              </p>

              <p>
                We appreciate you taking the time to give a rating. If you ever
                need more support, don&apos;t hesitate to get in touch!
              </p>
            </div>  */}
          </div>
        </div>

        <div className={styles.attribution}>
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Aiden Yoon</a>.
        </div>
      </div>
    </>
  );
};

export default HomePage;
