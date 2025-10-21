import React from "react";
import "./Privacy.css";

function PrivacyPolicy() {
  return (
    <main className="pp">
      <h1>Privacy Policy</h1>

      <p className="lead">
        At Tiny Steps Child Development Center (CDC), we are committed to
        protecting your privacy. This Privacy Policy outlines how we collect,
        use, and safeguard your personal information when you visit our website
        at{" "}
        <a
          href=" https://tinystepscdc.com/."
          target="_blank"
          rel="noopener noreferrer">
          https://tinystepscdc.com/.
        </a>
      </p>

      <ol className="sections">
        <li>
          <h2>Information We Collect:</h2>
          <ul>
            <li>
              When you visit our website, we may collect personal information
              such as your name, email address, phone number, and any other
              information you voluntarily provide through our contact forms or
              email communications.
            </li>
          </ul>
        </li>

        <li>
          <h2>How We Use Your Information:</h2>
          <ul>
            <li>
              We use the information we collect to respond to your inquiries,
              provide services requested by you, and improve our website’s
              content and functionality.
            </li>
            <li>
              Your personal information may also be used for administrative and
              communication purposes, such as sending updates, newsletters, or
              promotional materials if you have opted to receive them.
            </li>
          </ul>
        </li>

        <li>
          <h2>Data Security:</h2>
          <ul>
            <li>
              We employ industry-standard security measures to protect your
              personal information from unauthorized access, disclosure,
              alteration, or destruction.
            </li>
            <li>
              However, please note that no method of transmission over the
              internet or electronic storage is completely secure. While we
              strive to protect your personal information, we cannot guarantee
              its absolute security.
            </li>
          </ul>
        </li>

        <li>
          <h2>Disclosure of Information:</h2>
          <ul>
            <li>
              We do not sell, trade, or rent your personal information to third
              parties. However, we may share your information with trusted
              service providers who assist us in operating our website or
              conducting our business, provided that they agree to keep your
              information confidential.
            </li>
          </ul>
        </li>

        <li>
          <h2>Cookies:</h2>
          <ul>
            <li>
              Our website may use cookies to enhance your browsing experience.
              You can choose to accept or decline cookies through your browser
              settings. Please note that disabling cookies may affect the
              functionality of certain parts of our website.
            </li>
          </ul>
        </li>

        <li>
          <h2>Third-Party Links:</h2>
          <ul>
            <li>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these
              websites. We encourage you to review the privacy policies of any
              third-party sites you visit.
            </li>
          </ul>
        </li>

        <li>
          <h2>Children’s Privacy:</h2>
          <ul>
            <li>
              Our services are not directed to children under the age of 13. We
              do not knowingly collect personal information from children. If
              you believe that we have inadvertently collected information from
              a child, please contact us immediately.
            </li>
          </ul>
        </li>

        <li>
          <h2>Changes to Privacy Policy:</h2>
          <ul>
            <li>
              We reserve the right to modify or update this Privacy Policy at
              any time. Any changes will be effective immediately upon posting
              the updated policy on this page.
            </li>
          </ul>
        </li>
      </ol>

      <p className="closing">
        By using our website, you consent to the terms of this Privacy Policy.
        If you have any questions or concerns about our privacy practices,
        please contact us at <b>tinystepscdc@gmail.com .</b>
      </p>
    </main>
  );
}

export default PrivacyPolicy;
