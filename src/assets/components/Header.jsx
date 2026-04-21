function Header({ busca, setBusca }) {
  return (
    <header className="flex items-center justify-between bg-gradient-to-r from-[#0d0d0d] to-[#1a1a1a] border-b border-[#c9b46c] px-8 py-4 relative">
      
      <img
        src="src/assets/logo.png"
        alt="Logo"
        className="w-[150px] drop-shadow-[0_0_5px_#c9b46c]"
      />

      <div className="absolute left-1/2 -translate-x-1/2 text-[22px] tracking-[2px] text-[#c9b46c]">
        <h1>EldenWiki</h1>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Buscar..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="px-3 py-1 rounded-md border border-[#c9b46c] bg-[#0d0d0d]"
        />
      </div>
    </header>
  );
}

export default Header;