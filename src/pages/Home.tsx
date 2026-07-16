import { AboutPreview } from '../components/sections/AboutPreview';
import { CatalogDownload } from '../components/sections/CatalogDownload';
import { ContactClose } from '../components/sections/ContactClose';
import { CustomFlow } from '../components/sections/CustomFlow';
import { Hero } from '../components/sections/Hero';
import { PortfolioPreview } from '../components/sections/PortfolioPreview';
import { ProductPreview } from '../components/sections/ProductPreview';
import { WorkshopStory } from '../components/sections/WorkshopStory';
import { PageMeta } from '../components/ui/PageMeta';

export function Home() {
  return (
    <>
      <PageMeta
        title="Karya Rotan Indonesia"
        description="Produksi furniture rotan, lighting, home decor, dan handicraft di Bali untuk hotel, restoran, villa, retail, dan proyek komersial."
      />
      <Hero />
      <AboutPreview />
      <ProductPreview />
      <PortfolioPreview />
      <WorkshopStory />
      <CustomFlow />
      <ContactClose />
      <CatalogDownload />
    </>
  );
}
