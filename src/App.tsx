import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./Home"
import RingsInShadows from "./RingsInShadows"
import FluidityIsKing from "./FludityIsKing"
import AgentMaxing from "./AgentMaxing"
import ToolsDontMatter from "./ToolsDontMatter"

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/rings-in-shadows", element: <RingsInShadows /> },
  { path: "/fluidity-is-king", element: <FluidityIsKing /> },
  { path: "/agent-maxing", element: <AgentMaxing /> },
  { path: "/tools-dont-matter", element: <ToolsDontMatter /> },
])

export default function App() {
  return <RouterProvider router={router} />
}