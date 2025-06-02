export default function Cards(props) {
  return (
    <div className="flex items-center justify-center h-full gap-8" /*Cards*/>
      <div className="flex bg-[#1B1C1E] rounded-3xl p-6 w-80 text-center h-full items-center transform transition-transform hover:translate-y-[-5px] cursor-pointer">
        <h2 className="text-2xl font-bold text-white">
          <span style={{ 
            background: 'linear-gradient(90deg, #EED4F8 9.38%, rgba(255,255,255,0.988235) 49.83%, #AFC6FE 90.28%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Crie, misture e finalize </span>com ajuda real.
        </h2>
      </div>
      <div className="flex bg-[#202020] rounded-3xl p-6 w-80 text-center h-full items-center transform transition-transform hover:translate-y-[-5px] cursor-pointer">
        <h2 className="text-2xl font-bold text-white">Produza como um gênio. Sem saber tudo de  <span style={{ 
            background: 'linear-gradient(90deg, #EED4F8 9.38%, #AFC6FE 90.28%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>música.</span></h2>
      </div>
      <div className="flex bg-[#1B1C1E] rounded-3xl p-6 w-80 text-center h-full items-center transform transition-transform hover:translate-y-[-5px] cursor-pointer">
        <h2 className="text-2xl font-bold text-white">Uma DAW minimalista  <span style={{ 
            background: 'linear-gradient(90deg, #EED4F8 9.38%, rgba(255,255,255,0.988235) 49.83%, #AFC6FE 90.28%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>com inteligência artificial </span> integrada.</h2>
      </div>
    </div>
  );
}