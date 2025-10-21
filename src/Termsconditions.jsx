import React from "react";
import "./Terms.css";

function Termsconditions() {
  return (
    <div>
      <main className="tc">
        <h1>Terms and Conditions</h1>

        <p className="lead">
          Welcome to the <strong>Tiny Steps</strong> Child Development Center
          (CDC)! By accessing our website at{" "}
          <a
            href="https://tinystepscdc.com/"
            target="_blank"
            rel="noopener noreferrer">
            https://tinystepscdc.com/
          </a>
          , you agree to abide by the following terms and conditions:
        </p>

        <ol className="sections">
          <li>
            <h2>Use of Website:</h2>
            <ul>
              <li>
                You must use our website in accordance with all applicable laws
                and regulations.
              </li>
              <li>
                Any unauthorized use of our website’s content, including but not
                limited to text, images, and logos, is prohibited.
              </li>
            </ul>
          </li>

          <li>
            <h2>Privacy Policy:</h2>
            <ul>
              <li>
                We respect your privacy. Please refer to our Privacy Policy for
                information on how we collect, use, and protect your personal
                information.
              </li>
            </ul>
          </li>

          <li>
            <h2>Intellectual Property:</h2>
            <ul>
              <li>
                All content on this website, including text, graphics, logos,
                images, and software, is the property of Tiny Steps CDC and is
                protected by intellectual property laws.
              </li>
              <li>
                You may not reproduce, distribute, modify, or display any
                content from our website without prior written consent.
              </li>
            </ul>
          </li>

          <li>
            <h2>Links to Third-Party Websites:</h2>
            <ul>
              <li>
                Our website may contain links to third-party websites for your
                convenience. We do not endorse or guarantee the accuracy of the
                content on these websites.
              </li>
              <li>
                We are not responsible for any damages or losses incurred as a
                result of your use of third-party websites.
              </li>
            </ul>
          </li>

          <li>
            <h2>Limitation of Liability:</h2>
            <ul>
              <li>
                Tiny Steps CDC and its affiliates shall not be liable for any
                direct, indirect, incidental, special, or consequential damages
                arising out of or in any way connected with your use of our
                website.
              </li>
            </ul>
          </li>

          <li>
            <h2>Contact Information:</h2>
            <ul>
              <li>
                For inquiries or concerns regarding these terms and conditions,
                please contact us at:
              </li>
              <li> Phone: +91 9886062430</li>
              <li>Email: tinystepscdc@gmail.com</li>

              <li>
                Address: 52/1, Mahadevapura Main Rd, near DSR ELITE, B
                Narayanapura, Mahadevapura, Bengaluru, Karnataka 560048
              </li>
            </ul>
          </li>

          <li>
            <h2>Changes to Terms and Conditions:</h2>
            <ul>
              <li>
                We reserve the right to modify or update these terms and
                conditions at any time without prior notice. Please review this
                page periodically for changes.
              </li>
            </ul>
          </li>
        </ol>

        <p className="closing">
          By continuing to use our website, you acknowledge that you have read,
          understood, and agree to be bound by these terms and conditions. If
          you do not agree to these terms, please refrain from using our
          website.
        </p>
      </main>
    </div>
  );
}

export default Termsconditions;
