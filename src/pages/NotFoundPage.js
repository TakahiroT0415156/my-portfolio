import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import { importImg } from "../utils/importImages";

const NotFoundPage = () => {
  const { ojigi } = importImg();

  return (
    <>
      <Header />
      <div>
        <h1 className="">お探しのページは見つかりませんでした</h1>
        <img src={ojigi} alt={ojigi} className="profileIcon" />
        <div>
          全力でお探ししたのですが、大変残念ながらお客様がお探しのページを見つけることができませんでした。
          下記の主要コンテンツへのリンクや、サイト内検索をご利用いただき、再度目的のページをお探しいただけましたら幸いです。
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundPage;
