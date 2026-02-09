import './App.css'
import Topbar from './components/layout/Topbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import CategorySection from './components/sections/CategorySection'
import CatalogSection from './components/sections/CatalogSection'
import CTASection from './components/sections/CTASection'

function App() {
  const collections = [
    { title: 'Plant Forward', media: 'media-ten' },
    { title: 'Weeknight Warmers', subtitle: '16 recipes', media: 'media-eleven' },
    { title: 'Sweet Escape', media: 'media-twelve' },
    { title: 'Seafood Studio', media: 'media-thirteen' },
    { title: 'Breakfast Rituals', media: 'media-fourteen' },
    { title: 'Cozy Bowls', media: 'media-fifteen' },
  ]

  const catalog = [
    {
      title: 'Seared Tuna Tataki',
      time: '25 min',
      rating: '4.8',
      tag: 'Chef pick',
      media: 'media-sixteen',
    },
    {
      title: 'Citrus Herb Salad',
      time: '15 min',
      rating: '4.6',
      tag: 'Fresh',
      media: 'media-seventeen',
    },
    {
      title: 'Saffron Risotto',
      time: '35 min',
      rating: '4.7',
      tag: 'Comfort',
      media: 'media-eighteen',
    },
    {
      title: 'Lemongrass Broth',
      time: '30 min',
      rating: '4.9',
      tag: 'Signature',
      media: 'media-nineteen',
    },
    {
      title: 'Hokkaido Milk Bread',
      time: '55 min',
      rating: '4.8',
      tag: 'Baked',
      media: 'media-twenty',
    },
    {
      title: 'Chili Citrus Shrimp',
      time: '22 min',
      rating: '4.7',
      tag: 'Popular',
      media: 'media-twentyone',
    },
    {
      title: 'Lavender Honey Cake',
      time: '45 min',
      rating: '4.9',
      tag: 'Dessert',
      media: 'media-twentytwo',
    },
    {
      title: 'Golden Pumpkin Curry',
      time: '40 min',
      rating: '4.7',
      tag: 'Seasonal',
      media: 'media-twentythree',
    },
  ]

  return (
    <div className="page">
      <Topbar />
      <main className="content">
        <HeroSection />
        <CategorySection collections={collections} />
        <CatalogSection catalog={catalog} />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
