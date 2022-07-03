import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking"
  };
}

export async function getStaticProps() {
  return {
    props: {
      title: "Dynamic Route"
    },
    revalidate: 300
  };
}

export default function DynamicRoutePage({ title }) {
  return (
    <div id="blog-dynamic-route">
      <Header />
      <h3>{title}</h3>
      <Footer />
    </div>
  );
}
