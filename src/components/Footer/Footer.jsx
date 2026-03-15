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
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 15 17"
								className={styles.icon}
							>
								<title>share</title>
								<path
									fill="currentColor"
									d="M12.5 16.667a2.4 2.4 0 0 1-1.77-.73 2.4 2.4 0 0 1-.73-1.77q0-.126.063-.584l-5.855-3.416a2.47 2.47 0 0 1-1.708.666 2.4 2.4 0 0 1-1.77-.729A2.4 2.4 0 0 1 0 8.334q0-1.042.73-1.771a2.4 2.4 0 0 1 1.77-.73 2.48 2.48 0 0 1 1.708.667l5.855-3.417a1.4 1.4 0 0 1-.053-.28A4 4 0 0 1 10 2.5q0-1.042.73-1.77A2.4 2.4 0 0 1 12.5 0a2.4 2.4 0 0 1 1.77.73q.73.728.73 1.77t-.73 1.77A2.4 2.4 0 0 1 12.5 5a2.48 2.48 0 0 1-1.708-.667L4.938 7.75q.041.146.052.281a4 4 0 0 1 0 .604q-.01.135-.053.282l5.855 3.416a2.47 2.47 0 0 1 1.708-.666 2.4 2.4 0 0 1 1.77.729q.73.729.73 1.77 0 1.042-.73 1.771a2.4 2.4 0 0 1-1.77.73m0-1.667q.354 0 .594-.24t.24-.593a.8.8 0 0 0-.24-.594.8.8 0 0 0-.594-.24.8.8 0 0 0-.594.24.8.8 0 0 0-.24.594q0 .354.24.593.24.24.594.24m-10-5.833q.354 0 .594-.24t.24-.594a.8.8 0 0 0-.24-.593.8.8 0 0 0-.594-.24.8.8 0 0 0-.594.24.8.8 0 0 0-.24.593q0 .354.24.594t.594.24m10-5.834q.354 0 .594-.24.24-.239.24-.593a.8.8 0 0 0-.24-.594.8.8 0 0 0-.594-.24.8.8 0 0 0-.594.24.8.8 0 0 0-.24.594q0 .354.24.594t.594.24"
								/>
							</svg>
						</div>
					</a>
					<a href="#" className={styles.shareBtn}>
						<div style={{ width: 17, height: 14 }}>
							<svg
								className={styles.icon}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 17 14"
							>
								<title>email</title>
								<path
									fill="currentColor"
									d="M1.667 13.333q-.688 0-1.177-.49A1.6 1.6 0 0 1 0 11.668v-10Q0 .979.49.49.979 0 1.667 0H15q.687 0 1.177.49.49.489.49 1.177v10q0 .687-.49 1.177t-1.177.49zM8.333 7.5 1.667 3.333v8.334H15V3.333zm0-1.667L15 1.667H1.667zm-6.666-2.5V1.667zv8.334z"
								/>
							</svg>
						</div>
					</a>
				</div>
			</div>
			<p
				className={styles.copyright}
			>{`\u00A9 ${new Date().getFullYear()} ${shared.footer.copyright}`}</p>
		</footer>
    );
}
