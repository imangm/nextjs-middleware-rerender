import { Footer } from "../components/footer";
import { Header } from "../components/header";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking"
  };
}

export async function getStaticProps() {
  return {
    props: {
      title: "Catch All Route"
    },
    revalidate: 300
  };
}

export default function CatchAllPage({ title }) {
  return (
    <div id="root-catchall">
      <Header />
      <h3>{title}</h3>
      <Footer />
    </div>
  );
}
