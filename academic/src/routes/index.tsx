import Header from "~/components/home/Header"
import Research from "~/components/home/Research"
import Publications from "~/components/home/Publications"
import Services from "~/components/home/Services"
import Miscellaneous from "~/components/home/Miscellaneous"

export default function Home() {
  return (
    <>
      <Header />
      <Publications />
      <Research />
      <Services />
      <Miscellaneous />
    </>
  )
}
