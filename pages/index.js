import { Footer } from "../components/footer";
import { Header } from "../components/header";

export async function getStaticProps() {
  return {
    props: {
      title: "Root Index"
    },
    revalidate: 300
  };
}

export default function Home({ title }) {
  return (
    <div id="root-index">
      <Header />
      <h3>{title}</h3>
      <Footer />
    </div>
  );
}
