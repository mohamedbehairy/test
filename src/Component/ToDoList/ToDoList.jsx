import React from "react";

export default function ToDoList({
  id,
  toDo,
  isCompleted,
  toggleTask,
  rmTask,
}) {
  console.log(toDo, isCompleted);

  return (
    <>
      <div className="toDoLists flex justify-between px-5">
        <div className="tasks">
          <ul>
            <li
              className={`${
                isCompleted &&
                "line-through decoration-2 decoration-emerald-500"
              } m-3 font-bold list-disc`}
            >
              {toDo}
            </li>
          </ul>
        </div>
        <div className="actions flex gap- items-center">
          <svg
            onClick={() => toggleTask(id)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 cursor-pointer hover:bg-green-400 dark:hover:bg-green-600 rounded-full m-2 p-1 transition-all duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
          <svg
            onClick={() => rmTask(id)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 cursor-pointer hover:bg-red-400 dark:hover:bg-red-600 rounded-full m-2 p-1 transition-all duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
