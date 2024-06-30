import styles from "./page.module.css";
export default function Home() {
  return (
    <div className="container mt-3">
      <div>
        <span className={` me-1 ` + styles.homeHeading}>Legislation</span>
        <span
          style={{ fontWeight: "800", fontSize: "1.5rem", color: "#08c6aa" }}
        >
          Uk
        </span>

        <p
          style={{
            fontWeight: "800",
            fontSize: "1.5rem",
            color: "#6b7280",
            lineHeight: "32px",
          }}
        >
          Stand out with your Personalized Cover Letter using the most advanced
          Cover Letter Copilot available
        </p>
      </div>
      {/* Wishlist Seciont  */}
      <div>
        <div class={styles.wishlistContainer}>
          <input type="email" placeholder="Enter your email" />
          <button className="btnPrimary">Join Waitlist</button>
        </div>

        <div className="mt-4">
          <h3
            style={{
              fontWeight: "700",
              fontSize: "1.5rem",
              color: "#1f2937",
              lineHeight: "32px",
            }}
          >
            Features
          </h3>

          <ul class="custom-list">
            <li>Custom Cover Letter Generation</li>
            <li>Personalized based on Resume and Job Description</li>
            <li>Your Writing Style</li>
            <li>Analytics to determine Quality of Cover Letter</li>
            <li>Premium LaTeX Cover Letters</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
