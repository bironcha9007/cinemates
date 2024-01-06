
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
      <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="https://visualgraphicmd.com.co/" className="hover:underline">Bayron Castillo</Link>. All Rights Reserved.</span>
          <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
                  <a href="https://www.facebook.com/bayronm" target="blank" className="mr-4 hover:underline md:mr-6 ">Facebook</a>
              </li>
              <li>
                  <a href="https://www.linkedin.com/in/bayron-oswaldo-castillo-mirque-169068ba/" target="blank" className="mr-4 hover:underline md:mr-6">LinkedIn</a>
              </li>
              <li>
                  <a href="https://visualgraphicmd.com.co/" target="blank" className="mr-4 hover:underline md:mr-6">Web Page</a>
              </li>
              <li>
                  <a href="https://github.com/bironcha9007" target="blank" className="hover:underline">Github</a>
              </li>
          </ul>
      </footer>
  )
}
