import { Title, Meta } from "@solidjs/meta"
import Header from "~/components/home/Header"
import Research from "~/components/home/Research"
import Publications from "~/components/home/Publications"
import Services from "~/components/home/Services"
import Miscellaneous from "~/components/home/Miscellaneous"
import { profile } from "~/data/profile"

export default function Home() {
  return (
    <>
      <Title>Ao Jiao</Title>
      <Meta name="description" content={profile.bio.slice(0, 160)} />
      <Meta property="og:title" content="Ao Jiao" />
      <Meta property="og:description" content={profile.bio.slice(0, 160)} />
      <Meta property="og:type" content="website" />
      <Header />
      <Publications />
      <Research />
      <Services />
      <Miscellaneous />
    </>
  )
}
