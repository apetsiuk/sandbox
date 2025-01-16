import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import logoImg from '@/assets/ap_logo.jpg';

export default function Home() {
  return (
    
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />


        <div><img src="static_images/ap.jpg" height="200" />
          <p>Hi, I'm Aliaksei, a PhD in Electrical and Computer Engineering with expertise in Robotics and Control. I am
            highly passionate about additive manufacturing, particularly the application of computer vision in this
            field. My experience includes in-depth knowledge of pattern recognition and texture analysis, along with
            hands-on expertise in object segmentation and point cloud processing. I also have a strong background in
            embedded sensor systems and motor control. I am enthusiastic about integrating computer vision and augmented
            reality technologies with intelligent sensor systems to address complex manufacturing challenges.</p>
        </div>

        <img src={logoImg.src} width="250" alt="logo" />

        <p>ap_test2</p>
        <h3><Link href="/research">research</Link></h3>

        <div className={styles.grandparent}>
          <p>as;kcalkscalscnansc
            ascasnclasnc advaddddddddddddddd
            advvvvvvvv
            advvvvvvvvvvvvvvv
          </p>
          <p>as;kcalkscalscnansc
            ascasnclasnc
          </p>
        </div>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
