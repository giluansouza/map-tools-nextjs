import React from 'react';
import { Header } from '@/components/header';
import { NavigationMenuComponent } from '@/components/navigation-menu';

export default function Geoprocessamento() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1">
          <div 
            className="flex items-center justify-between bg-zinc-800 text-white p-2 border-b border-zinc-600 lg:p-4">
            <h2 className='text-md lg:text-2xl font-bold text-zinc-400'>Geoprocessamento</h2>
            <NavigationMenuComponent />
          </div>

          <div className="flex">
            
          </div>

      </div>
      <div className="bg-blue-950 text-white px-2">
        <span className='text-xs'>&copy; 2023</span>
      </div>
    </div>
  );
}
