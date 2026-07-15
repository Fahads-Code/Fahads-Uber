import { RouterProvider } from "react-router-dom"; // yeh react ko URL ke sath sync karta hai or dekhta hai ke url main kya search kiya gaya hai toh, jo ham ne isse props main list di hai
                                                   // us ke hisab se check kar ke, component ko screen pr render kar deta hai
import { router } from "./app.routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
