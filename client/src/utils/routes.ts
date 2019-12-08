import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Projects from "../components/pages/Projects";
import Connect from "../components/pages/Connect";

export const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/projects", name: "Projects", Component: Projects },
  // { path: "/about", name: "Work", Component: About },
  { path: "/connect", name: "Connect", Component: Connect }
];