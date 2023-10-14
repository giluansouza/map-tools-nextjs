import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1">
          <div 
            className="bg-zinc-800 text-white p-8 border-b border-zinc-700 lg:p-14">
            <h2 className='text-2xl font-bold text-zinc-400'>Ferramentas de Mapa</h2>
            <span>Mapas de densidade kernel e geoprocessamento de pontos</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4">
            <Card className='flex flex-col'>
              <CardHeader>
                <CardTitle>Densidade Kernel</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Gere mapas de calor apartir de coordenadas</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/densidade-kernel">Acessar</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className='flex flex-col'>
              <CardHeader>
                <CardTitle>Geoprocessamento</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Use marcadores personalizados e poligonos personalizados.</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/geoprocessamento">Acessar</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

      </div>
      <div className="bg-blue-950 text-white px-2">
        <span className='text-xs'>&copy; 2023</span>
      </div>
    </div>
  );
}

export default App;
