import { Button } from '../components/ui/Button';
import { PageMeta } from '../components/ui/PageMeta';

export function NotFound() {
  return (
    <section className="flex min-h-[75dvh] items-center bg-kr-paper pb-20 pt-32">
      <PageMeta title="Halaman tidak ditemukan" description="Halaman yang Anda cari tidak tersedia." />
      <div className="site-container">
        <p className="kicker">404</p>
        <h1 className="display-lg mt-5 max-w-[10ch]">Halaman ini tidak ditemukan.</h1>
        <p className="body-lg mt-6 max-w-[48ch] text-kr-muted">
          Kembali ke Home untuk melihat produk, portfolio, dan layanan custom project kami.
        </p>
        <div className="mt-8">
          <Button href="/">Kembali ke Home</Button>
        </div>
      </div>
    </section>
  );
}
