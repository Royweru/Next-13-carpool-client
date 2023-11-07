import Image from 'next/image'
import SearchBar from '@/components/search-bar'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className=" grid grid-cols-1 md:grid-cols-2 p-5 gap-8 mb-5 w-full mt-5 h-2/6">
          <SearchBar />
      </div>
    </main>
  )
}
