import Image from "next/image";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:justify-between p-0">
      <Header isHome={true}><Navigation isHome={true} /></Header>
      <div className="home-container w-full max-w-4xl flex justify-evenly relative z-[-1] flex place-items-center flex-col sm:flex-row pb-32 lg:pb-12" >
            <Image
              src="/williamElizabethCunningham.png"
              alt="William and Elizabeth Cunningham"
              className="border-4 border-black z-10 mt-6 mb-6 lg:mb-0"
              width={250}
              height={24}
              priority
            />
            <div className="flex-col text-center max-w-xs" style={{ color: '#052003', fontFamily: 'fantasy'}}>
              <h2 style={{ lineHeight: '60px', color: '51 22 22'}} className="text-5xl font-extrabold">The Cunningham Family</h2>
              <h2 style={{ color: '51 22 22'}} className="text-3xl font-bold">of Drumcondra, Dublin</h2>
              {/* <p className="italic mt-4 text-2xl font-semibold" style={{ color: 'black'}}>~ A World War Family ~</p> */}
            </div>
      </div>

      <div className="mb-32 mt-8 hidden lg:grid text-center lg:mb-0 lg:w-full lg:max-w-7xl lg:grid-cols-5 lg:text-left  border-t-2 border-black">
        {/* <a
          href="cunningham-family"
          className="group rounded-lg border border-transparent px-2 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-xl font-semibold">
          <span style={{fontFamily: 'fantasy'}}>Cunningham Family{" "}</span>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Royal Irish Regiment
          </p>
        </a> */}

        <a
          href="william-cunningham"
          className="group rounded-lg border border-transparent px-2 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-xl font-semibold">
            <span style={{fontFamily: 'fantasy'}}>William Cunningham{" "}</span>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            1880 - 1966
          </p>
        </a>

        <a
          href="elizabeth-ennis"
          className="group rounded-lg border border-transparent px-2 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-xl font-semibold">
            <span style={{fontFamily: 'fantasy'}}>Elizabeth Ennis{" "}</span>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            1881 - 1961
          </p>
        </a>

        <a
          href="may-cunningham"
          className="group rounded-lg border border-transparent px-2 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-xl font-semibold">
            <span style={{fontFamily: 'fantasy'}}>May Cunningham{" "}</span>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            1910 - 1991
          </p>
        </a>




        <a
          href="sean-cunningham"
          className="group rounded-lg border border-transparent px-2 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-xl font-semibold">
            <span style={{fontFamily: 'fantasy'}}>Se&aacute;n Cunningham{" "}</span>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            1917 - 1951
          </p>
        </a>

        <a
          href="bill-cunningham"
          className="group rounded-lg border border-transparent px-2 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-xl font-semibold">
            <span style={{fontFamily: 'fantasy'}}>Bill Cunningham{" "}</span>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            1921 - 1960
          </p>
        </a>
      </div>
    </main>
  );
}
