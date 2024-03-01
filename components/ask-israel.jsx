import {NewChat} from "./new-chat";
export function AskIsrael() {
  return (
    <div className='w-full max-w-2xl mx-auto px-4'>
      <div className='flex flex-col h-screen'>
        <header className='p-4 border-b'>
          <h1 className='text-2xl font-bold'>Assistant</h1>
        </header>
        <NewChat />
      </div>
    </div>
  );
}
