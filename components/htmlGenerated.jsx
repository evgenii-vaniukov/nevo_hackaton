const AppLayout = () => (
  <div className='flex flex-col h-full bg-gray-100'>
    <header className='flex justify-center items-center p-2.5 text-center'>
      <span className='m-1 text-sm text-gray-800'>26/2</span>
      <span className='m-1 text-sm text-gray-800'>27/2</span>
      <span className='m-1 text-sm text-gray-800'>28/2</span>
      <span className='rounded-full bg-green-500 text-white m-1 p-1.5 text-sm'>
        1/3
      </span>
      <span className='m-1 text-sm text-gray-800'>2/3</span>
    </header>

    <main className='p-2.5 text-center'>
      <div className='main-image'>
        <img
          className='block max-w-full h-auto mx-auto rounded-lg shadow-md'
          src='chart.png'
          alt='Main Content'
        />
      </div>

      <section className='insights'>
        <h2 className='text-gray-800 mb-4'>Insights</h2>
        <div className='flex overflow-x-auto justify-center'>
          <img
            className='m-2.5 w-30 h-45 rounded shadow'
            src='groceries.jpg'
            alt='Insight 1'
          />
          <img
            className='m-2.5 w-30 h-45 rounded shadow'
            src='calm.jpg'
            alt='Insight 2'
          />
          <img
            className='m-2.5 w-30 h-45 rounded shadow'
            src='groceries.jpg'
            alt='Insight 3'
          />
        </div>
      </section>
    </main>
  </div>
);

export {AppLayout};
