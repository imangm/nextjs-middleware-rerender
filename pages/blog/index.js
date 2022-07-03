import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

export async function getStaticProps() {
  return {
    props: {
      title: "Blog Index"
    },
    revalidate: 300
  };
}

export default function BlogIndexPage({ title }) {
  return (
    <div id="blog-index">
      <Header />
      <h3>{title}</h3>
      <Footer />
    </div>
  );
}
