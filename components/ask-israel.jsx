import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

export function AskIsrael() {
  return (
    <div className='w-full max-w-2xl mx-auto px-4'>
      <div className='flex flex-col h-screen'>
        <header className='p-4 border-b'>
          <h1 className='text-2xl font-bold'>Assistant</h1>
        </header>
        <main className='flex-1 p-4 flex flex-col justify-end gap-4'>
          <div className='grid gap-4'>
            <div className='flex items-end gap-4'>
              <div className='rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 p-4 max-w-[75%] dark:border-gray-800'>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  Hi there! How can I assist you today?
                </p>
              </div>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='flex-1'>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
                  <div className='h-6 w-6 text-gray-400' />
                </div>
                <Input
                  className='pl-12'
                  placeholder='Type a message...'
                  type='text'
                />
              </div>
            </div>
            <Button className='h-10'>Send</Button>
          </div>
        </main>
      </div>
    </div>
  );
}
