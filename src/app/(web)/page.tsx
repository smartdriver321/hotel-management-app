import HeroSection from './_components/home/hero-section/HeroSection'
import PageSearch from './_components/home/page-search/PageSearch'
import Gallery from './_components/home/Gallery'
import NewsLetter from './_components/home/NewsLetter'

export default function Home() {
	return (
		<>
			<HeroSection />
			<PageSearch />
			<Gallery />
			<NewsLetter />
		</>
	)
}
