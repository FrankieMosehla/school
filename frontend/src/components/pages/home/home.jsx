import Navbar from "../../Navbar";
import Cardsection from "./cardsection";
import Hero from "./hero";
import HowItworks from "./howitworks";

export default function Home() {
    return (
        <main className="mx-2 lg:mx-5">
            <Navbar />
            <Hero />
            <Cardsection />
            <HowItworks />
        </main>
    )
}