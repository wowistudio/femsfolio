import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-screen p-24 relative">
      <section className='absolute'>
        <h2 className='uppercase mb-2 font-semibold'>Femke Verhoeff</h2>
        <a className='block' href="/lycra">Lycra</a>
        <a className='block' href="/lycra">Yellow Denim Suit</a>
        <a className='block' href="/lycra">Levi's</a>
        <a className='block' href="/lycra">Tommy Hilfiger</a>
      </section>

      <section className='absolute bottom-[6rem]'>
        <p>Instagram</p>
        <p>Linkedin</p>
      </section>

      <h1 className='text-7xl font-bold absolute -translate-x-1/2 -translate-y-1/2 left-[70%] top-[40%] z-10'>FEMSFOLIO</h1>

      <div className='overflow-hidden rounded-2xl w-[800px] absolute -translate-x-1/2 -translate-y-1/2 left-[50%] top-[50%]'>
        <Image
          src="/homepage.jpeg"
          width={800}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </main>
  )
}
