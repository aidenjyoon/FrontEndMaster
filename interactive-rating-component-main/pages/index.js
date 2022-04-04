import Head from "next/head";
import Script from "next/script";

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
              <p>How did we do?</p>

              <p>
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>

              <form>
                {/* 1 */}
                <input type="radio" name="rating-1" id="1" value="1" />
                <div className={styles.radio__btn}>
                  <div className={styles.rating_value}>1</div>
                </div>

                {/* 2 */}
                <input type="radio" name="rating-2" id="2" value="2" />
                <div className={styles.radio__btn}>
                  <div className={styles.rating_value}>2</div>
                </div>

                {/* 3 */}
                <input type="radio" name="rating-3" id="3" value="3" />
                <div className={styles.radio__btn}>
                  <div className={styles.rating_value}>3</div>
                </div>

                {/* 4 */}
                <input type="radio" name="rating-4" id="4" value="4" />
                <div className={styles.radio__btn}>
                  <div className={styles.rating_value}>4</div>
                </div>

                {/* 5 */}
                <input type="radio" name="rating-5" id="5" value="5" />
                <div className={styles.radio__btn}>
                  <div className={styles.rating_value}>5</div>
                </div>

                <button>Submit</button>
              </form>
            </div>

            {/* <!-- Thank you state start --> */}
            <div className={styles.card__thankyou}>
              <p>You selected</p>

              <p>
                {/* <!-- Add rating here --> */}
                out of 5 Thank you!
              </p>

              <p>
                We appreciate you taking the time to give a rating. If you ever
                need more support, don&apos;t hesitate to get in touch!
              </p>
            </div>
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
