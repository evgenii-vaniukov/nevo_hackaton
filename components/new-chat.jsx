"use client";

import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {useChat} from "ai/react";

export function NewChat() {
  const {messages, input, handleInputChange, handleSubmit} = useChat();
  return (
    <form
      className='w-full h-full bg-white dark:bg-gray-900 flex flex-col'
      onSubmit={handleSubmit}
    >
      <Card className='flex-1'>
        <CardHeader className='p-4'>
          <CardTitle className='text-lg font-medium'>
            Chat with the AI
          </CardTitle>
          <CardDescription className='text-sm'>
            Ask a question and the AI will respond.
          </CardDescription>
        </CardHeader>
        <CardContent className='p-4 flex flex-col gap-4'>
          <div className='flex flex-col gap-2'></div>
          <div className='rounded-xl bg-gray-100 dark:bg-gray-800 p-4 text-sm break-words'>
            {messages.map((m, index) => (
              <li
                key={index}
                className='text-sm text-gray-500 dark:text-gray-400 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 p-4 max-w-[75%] dark:border-gray-800'
              >
                {/* {m.role === "user" ? "User: " : "AI: "} */}
                {m.content}
              </li>
            ))}
          </div>
          <div className='flex items-end gap-2'>
            <Input
              className='flex-1'
              id='question'
              placeholder='Type your question here...'
              value={input}
              onChange={handleInputChange}
            />
            <Button className='h-10' type='submit'>
              Ask
            </Button>
          </div>
        </CardContent>
      </Card>
      <nav className='fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 flex justify-around py-2'>
        <button className='flex flex-col items-center justify-center'>
          <HomeIcon className='h-6 w-6' />
          <span className='text-xs'>Home</span>
        </button>
        <button className='flex flex-col items-center justify-center'>
          <SearchIcon className='h-6 w-6' />
          <span className='text-xs'>Search</span>
        </button>
        <button className='flex flex-col items-center justify-center'>
          <UserIcon className='h-6 w-6' />
          <span className='text-xs'>Profile</span>
        </button>
        <button className='flex flex-col items-center justify-center'>
          <TextIcon className='h-6 w-6' />
          <span className='text-xs'>Chat</span>
        </button>
      </nav>
    </form>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
      <polyline points='9 22 9 12 15 12 15 22' />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='11' cy='11' r='8' />
      <path d='m21 21-4.3-4.3' />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
      <circle cx='12' cy='7' r='4' />
    </svg>
  );
}

function TextIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M17 6.1H3' />
      <path d='M21 12.1H3' />
      <path d='M15.1 18H3' />
    </svg>
  );
}
