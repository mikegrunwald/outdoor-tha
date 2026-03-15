import Image from "next/image";
import { shared } from "@/data/explore";
import styles from "./Footer.module.css";

export default function Footer() {
	return (
        <footer className={styles.footer}>
			<div className={styles.inner}>
				<div className={styles.brand}>
					<span className={styles.iconWrap} style={{ width: 100, height: 100 }}>
						<Image
							src="/images/icon-logo.svg"
							alt=""
							width={100}
							height={100}
							aria-hidden="true"
						/>
					</span>
					<span className={styles.siteName}>{shared.siteName}</span>
				</div>

				<nav className={styles.links} aria-label="Footer navigation">
					{shared.footer.links.map((link) => (
						<a key={link} href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}>
							{link}
						</a>
					))}
				</nav>

				<div
					style={{
						justifyContent: "flex-start",
						alignItems: "flex-start",
						gap: 16,
						display: "inline-flex",
					}}
				>
					<a href="#" className={styles.shareBtn}>
						<div style={{ width: 15, height: 17 }}>
							<Image
								src="/images/icon-share.svg"
								alt=""
								width={15}
								height={17}
								aria-hidden="true"
							/>
						</div>
					</a>
					<a href="#" className={styles.shareBtn}>
						<div style={{ width: 15, height: 17 }}>
							<Image
								src="/images/icon-mail.svg"
								alt=""
								width={15}
								height={17}
								aria-hidden="true"
							/>
						</div>
					</a>
				</div>
			</div>
			<p className={styles.copyright}>{`\u00A9 ${new Date().getFullYear()} ${shared.footer.copyright}`}</p>
		</footer>
    );
}
