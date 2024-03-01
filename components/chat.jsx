"use client";
import {useChat} from "ai/react";
import {Button} from "./ui/button";
import {Input} from "./ui/input";

export default function Chat() {
  const {messages, input, handleInputChange, handleSubmit} = useChat();

  return (
    <main className='flex-1 p-4 flex flex-col justify-end gap-4 overflow-y-scroll'>
      <div className='flex items-end gap-4'></div>
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
          </div>
          <form className='flex mt-4' onSubmit={handleSubmit}>
            <Input
              className='pl-12'
              placeholder='Type a message...'
              type='text'
              value={input}
              onChange={handleInputChange}
            />
            <Button className='self-center' type='submit'>
              Ask AI
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
