import { posts } from "./data"


function TextLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#707070] underline decoration-[#AEAEAE] underline-offset-[2px] transition-colors duration-150 hover:text-[#111]"
    >
      {children}
    </a>
  )
}

function App() {

  const postEls = posts.map(post => {
    return (
      <li key={post.id} className="group py-4.5 border-t-[0.5px] w-full border-[#e0e0e0]">
        {post.published ? (
          <a href={post.href}>
            <p className="text-sm pb-1.5">{post.title}</p>
            <p className="text-sm text-[#707070]">{post.blurb}</p>
          </a>
        ) : (
          <div>
            <p className="text-sm pb-1.5">
              {post.title}
              <span className="text-xs border-[0.55px] border-[#DBDBDB] text-[#666666] rounded-full px-1.5 py-0.5 ml-1 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                coming soon
              </span>
            </p>
            <p className="text-sm text-[#707070]">{post.blurb}</p>
          </div>
        )}
      </li>
    )
  })

  return (
    <main className="flex flex-col max-w-2xl items-start justify-center m-auto pt-28 pb-16 px-6">
      <header className="mb-9">
        <div>
          <h1 className="text-[15px] mb-1">Daniel Mbazu</h1>
          <p className="text-sm text-[#858585]">
            <span id="clock-digits"></span><span id="clock-static"> 2:12pm in London, UK</span>
          </p>
        </div>
      </header>
      <section>
        <p className="text-sm mb-6 leading-[1.55]">
          I'm a designer at heart, but I've always been drawn to the building side of things too.
        </p>

        <p className="text-sm mb-6 leading-[1.55]">
          Right now I run <TextLink href="https://www.shapeslab.design/">Shapes Lab</TextLink>, an independent studio where I help founders figure out their brand and shape their products. On evenings I'm usually hacking on something small with friends, sometimes it ships, sometimes it doesn't.
        </p>

        <p className="text-sm mb-6 leading-[1.55]">
          Before that, I was the founding designer at <TextLink href="https://join.tapro.com/">tapro</TextLink>, mostly focused on product with some brand work mixed in. And before Tapro, I was the first designer at <TextLink href="https://invertase.io/">Invertase</TextLink>, building tooling for developers.
        </p>

        <p className="text-sm mb-6 leading-[1.55]">
          I care about craft, though not in a precious way. I just notice when something feels slightly off, and I genuinely can't move on until it doesn't.
        </p>

        <p className="text-sm mb-6 leading-[1.55]">
          When I'm not working, I'm probably watching <TextLink href="https://en.wikipedia.org/wiki/Premier_League">football</TextLink> and picking apart the tactics, or planning the next trip somewhere I haven't been yet.
        </p>

        <p className="text-sm mb-6 leading-[1.55]">
          You can find me on <TextLink href="https://x.com/TheProductGuy__">X</TextLink> or <TextLink href="https://www.linkedin.com/in/daniel-mbazu-103714197/">Linkedin</TextLink>, also feel free to drop me a line at <a className="text-[#707070] underline decoration-[#AEAEAE] underline-offset-[2px] transition-colors duration-150 hover:text-[#111]" href="mailto:danielmbazu9@gmail.com" target="_blank">hey@mbazu.com</a>.
        </p>
      </section>
      <section className="w-full py-4">
        <h3 className="text-[15px] font-[420] mb-4 text-[#858585]">Writing</h3>
        <ul className="border-b-[0.5px] w-full border-[#e0e0e0]">
          {postEls}
        </ul>
      </section>
    </main>
  )
}

export default App