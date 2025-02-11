import React from "react";
function Footer() {
  return (
    <footer className="container mx-auto py-1 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
         Designed by{" "} {/* {" "} is used to explicitly add a space in JSX */}
        <a
          className="font-medium"
          href="https://www.linkedin.com/in/dipen-stha/"
          target="_blank" //open the link in a new tab
          rel="noreferrer noopener" //noreferrer prevents the new page from knowing the referrer (where the link was clicked from) 
          // and noopener prevents potential security vulnerabilities where the new tab can manipulate the original page.
        >
          Dipen Shrestha
        </a>{" "}
      </p>
    </footer>
  );
}
export default Footer;
