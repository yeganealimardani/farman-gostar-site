import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container">
            <h1>تجهیزات اتوماسیون صنعتی زیمنس</h1>
            <p>
              تأمین انواع PLC، HMI، درایو، اینورتر و تجهیزات اتوماسیون صنعتی
              با ضمانت اصالت کالا و مشاورهٔ فنی تخصصی.
            </p>
            <div className="hero-actions">
              <a href="/products" className="btn-primary">مشاهدهٔ محصولات</a>
              <a href="/contact" className="btn-secondary">استعلام قیمت</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
