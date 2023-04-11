import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2 className = "text-3xl">
          TFL Recipes
        </h2>
        <div>
        <button>
          +
        </button>
      </div>
      </div>
     
      
    </main>
  )
}
