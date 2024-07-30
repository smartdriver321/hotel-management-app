import HeroSection from './_components/home/hero-section/HeroSection'
import PageSearch from './_components/home/page-search/PageSearch'
import Gallery from './_components/home/Gallery'
import NewsLetter from './_components/home/NewsLetter'
import FeaturedRoom from './_components/home/FeaturedRoom'
import { getFeaturedRoom } from '@/libs/apis'

export default async function Home() {
	const featuredRoom = await getFeaturedRoom()

	return (
		<>
			<HeroSection />
			<PageSearch />
			<FeaturedRoom featuredRoom={featuredRoom} />
			<Gallery />
			<NewsLetter />
		</>
	)
}
