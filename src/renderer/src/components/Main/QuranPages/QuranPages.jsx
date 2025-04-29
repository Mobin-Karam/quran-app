const QuranPages = () => {
    const pages = Array.from({ length: 604 }, (_, i) => {
      const pageNumber = String(i + 1).padStart(3, '0'); // formats 1 => "001"
      return `../../../public/quran-page-png/${pageNumber}.png`;
    });
  
    return (
      <div className="w-full flex flex-col items-center justify-center">
        {pages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Quran page ${index + 1}`}
            className="max-w-[380px] h-full mb-4"
          />
        ))}
      </div>
    );
  };
  
  export default QuranPages;
  