import Image from "next/image";
import Link from "next/link";
import { shared } from "@/data/explore";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label={shared.siteName}>
          <span className={styles.iconWrap} style={{ width: 75, height: 75 }}>
            <Image
              src="/images/icon-logo.svg"
              alt=""
              width={25}
              height={25}
              aria-hidden="true"
            />
          </span>
          <span className={styles.logoText}>{shared.siteName}</span>
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          {shared.nav.map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className={styles.navLink}>
              {item}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <div className={styles.search}>
            <span className={styles.iconWrap} style={{ width: 15, height: 15 }}>
              <Image
                src="/images/icon-search.svg"
                alt=""
                width={15}
                height={15}
                aria-hidden="true"
              />
            </span>
            <input
              type="search"
              placeholder={shared.searchPlaceholder}
              className={styles.searchInput}
              aria-label="Search"
            />
          </div>
          <button type="button" className="outline small">{shared.signUp}</button>
        </div>
      </div>
    </header>
  );
}
