import { Zen_Dots } from 'next/font/google';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const zenDots = Zen_Dots({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-4 py-1 gap-16 bg-white" /*Main*/>
      <section className="bg-[linear-gradient(180deg,_#FFFFFF_0%,_#EDEDED_100%)] w-full flex flex-col gap-0 h-screen rounded-lg" /*Faixa 1*/>
        <header className="flex w-full items-center justify-center font-mono text-sm w-full" /*Header*/>
          <div className="flex items-center rounded-3xl p-4 bg-[#1B1C1E]" /*Header Content*/>
            <div /*Logo*/> 
              <h1 className={`${zenDots.className} text-2xl font-bold text-white-800`}>KIVO</h1>
            </div>
            <div className='flex gap-4' /*Buttons*/>
              <button className='text-gray font-semibold flex items-center text-white/70 ml-16 text-base cursor-pointer'>
                Mais
                <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button className='px-4 py-1 bg-white/10 rounded-lg text-white font-semibold text-lg cursor-pointer'>
                Conecte-se
              </button>
              <button className='px-4 py-1 bg-white rounded-lg text-black font-bold text-lg cursor-pointer'>
                Junte-se à lista de espera
              </button>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-center h-full gap-auto" /*Main Content*/>
          <div /*Main*/>
            <div className="w-100">
              <h1 className='text-6xl text-black font-bold'>A nova era da produção musical com IA.</h1>
            </div>
            <div>
            </div>
          </div>
          <div /*Cards*/>

          </div>
        </div>
      </section>
      <section className="bg-white w-full flex flex-col gap-0 h-screen">
      </section>
    </div>
  );
}
