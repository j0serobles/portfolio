/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                Based on a template by 
                <a
                  href="https://www.creative-tim.com?ref=nukr-default-footer"
                  target="_blank"
                >
                  Creative Tim
                </a>
              </li>

            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Original design by{" "}
            <a
              href="https://www.invisionapp.com?ref=nukr-default-footer"
              target="_blank"
            >
              Invision
            </a>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
