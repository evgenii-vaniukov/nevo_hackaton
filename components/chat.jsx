"use client";
import {useChat} from "ai/react";
import {Input} from "./ui/input";

export default function Chat() {
  const {messages, input, handleInputChange, handleSubmit} = useChat();

  return (
    // <div>
    //   <ul>
    //     {messages.map((m, index) => (
    //       <li key={index}>
    //         {m.role === "user" ? "User: " : "AI: "}
    //         {m.content}
    //       </li>
    //     ))}
    //   </ul>

    //   <form onSubmit={handleSubmit}>
    //     <label>
    //       Say something...
    //       <input value={input} onChange={handleInputChange} />
    //     </label>
    //     <button type='submit'>Send</button>
    //   </form>
    // </div>

    <main className='flex-1 p-4 flex flex-col justify-end gap-4'>
      <form className='grid gap-4' onSubmit={handleSubmit}>
        <div className='flex items-end gap-4'>
          <div className='rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 p-4 max-w-[75%] dark:border-gray-800'>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              Hi there! How can I assist you today?
            </p>
          </div>
        </div>
        <div className='flex gap-4'>
          <div className='flex-1'>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
                <div className='h-6 w-6 text-gray-400' />
              </div>
              <ul>
                {messages.map((m, index) => (
                  <li
                    key={index}
                    className='text-sm text-gray-500 dark:text-gray-400 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 p-4 max-w-[75%] dark:border-gray-800'
                  >
                    {/* {m.role === "user" ? "User: " : "AI: "} */}
                    {m.content}
                  </li>
                ))}
              </ul>
              <Input
                className='pl-12'
                placeholder='Type a message...'
                type='text'
                value={input}
                onChange={handleInputChange}
              />
            </div>
          </div>
          {/* <Button type='submit' className='h-10'>
            Send
          </Button> */}
        </div>
      </form>
    </main>
  );
}
