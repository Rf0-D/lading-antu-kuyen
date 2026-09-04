import PublicPageWrapper from "@/layouts/PublicPageWrapper"
import ExperiencesSkeleton from "./components/page"

const page = () => {
  return (
    <PublicPageWrapper>
      <ExperiencesSkeleton />
    </PublicPageWrapper>
  )
}

export default page