import { Flower } from 'lucide-react';

export function Header() {
  return (
    <header className="flex justify-center items-center gap-2 bg-zinc-900 text-white p-2 border-b border-zinc-700">
      <Flower size={24} color="red" />
      <h1 className='text-xl font-bold text-zinc-400'>Devboot</h1>
    </header>
  )
}