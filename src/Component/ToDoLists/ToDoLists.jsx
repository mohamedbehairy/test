import React, { useEffect, useState } from "react";
import ToDoList from "../ToDoList/ToDoList";

export default function ToDoLists() {
  const [lists, setLists] = useState([
    { id: 1, toDo: "Pray Fajr", isCompleted: false },
    { id: 3, toDo: "Study Lecture 1", isCompleted: true },
    { id: 4, toDo: "Study Lecture 2", isCompleted: false },
    { id: 5, toDo: "Revise JavaScript", isCompleted: false },
    { id: 6, toDo: "Practice React Hooks", isCompleted: false },
    { id: 7, toDo: "Solve 2 Coding Problems", isCompleted: true },
    { id: 8, toDo: "Watch Technical Video", isCompleted: false },
    { id: 9, toDo: "Work on Graduation Project", isCompleted: true },
    { id: 10, toDo: "Commit Code to GitHub", isCompleted: false },
    { id: 11, toDo: "Check Emails", isCompleted: false },
    { id: 12, toDo: "Exercise / Walk", isCompleted: false },
    { id: 13, toDo: "Take Short Break", isCompleted: false },
    { id: 14, toDo: "Review Daily Tasks", isCompleted: true },
    { id: 15, toDo: "Sleep Early", isCompleted: false },
  ]);
  const [completeCount, setCompleteCount] = useState(null);
  const [ramianingCount, setRamianingCount] = useState(null);
  useEffect(() => {
    setCompleteCount(lists.filter((task) => task.isCompleted).length);
    setRamianingCount(lists.filter((task) => !task.isCompleted).length);
  }, [lists]);

  function toggleTask(id) {
    let filteredArr = structuredClone(lists);

    filteredArr = filteredArr.map((task) => {
      if (task.id === id) task.isCompleted = !task.isCompleted;
      return task;
    });

    setLists(filteredArr);
  }
  function rmTask(id) {
    let filterdArr = structuredClone(lists);

    filterdArr = filterdArr.filter((task) => task.id != id);

    setLists(filterdArr);
  }

  function completedAll() {
    let filteredArr = structuredClone(lists);

    //^ filteredArr.map((task) => (task.isCompleted = true)); true

    filteredArr.forEach((task) => (task.isCompleted = true)); //^ better because map return new arr that i don't need

    setLists(filteredArr);
  }
  function clearCompleted() {
    let filterdArr = structuredClone(lists);

    filterdArr = filterdArr.filter((task) => !task.isCompleted);

    setLists(filterdArr);
  }

  return (
    <>
      <div className="container my-5 pb-5 bg-slate-50 dark:bg-slate-950 dark:text-amber-50">
        <h2 className="font-black text-4xl text-center p-5">Your To Do List</h2>
        <div className="w-full p-5">
          <div className="relative">
            <input
              type="email"
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-800 dark:text-slate-100 text-sm border border-slate-600 rounded-md pl-3 pr-16 py-2 transition duration-300 ease focus:outline-none focus:border-slate-900 hover:border-slate-900 dark:focus:border-slate-400 dark:hover:border-slate-400 shadow-sm focus:shadow"
              placeholder="Add your Tasks"
            />
            <button
              className="absolute right-1 top-1 rounded bg-sky-500 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Add Task
            </button>
          </div>
        </div>

        <div className="lay bar min-h-3.5 rounded-2xl bg-green-200 m-5">
          <div
            className={`bar min-h-3.5 rounded-2xl bg-green-700`}
            style={{
              width: `${
                completeCount + ramianingCount === 0
                  ? 0
                  : (completeCount / (completeCount + ramianingCount)) * 100
              }%`,
            }}
          ></div>
        </div>
        <div className="countTasks sm:flex justify-between">
          <div className="completed flex gap-2 mx-10 my-5 sm:my-0 font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              />
            </svg>
            Completed Tasks: {completeCount}
          </div>
          <div className="remaining flex gap-2 mx-10 my-5 sm:my-0 font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Remaining Tasks: {ramianingCount}
          </div>
        </div>
        <div className="btns flex justify-around my-4">
          <button
            onClick={() => {
              completedAll();
            }}
            className="w-1/3 btn bg-sky-300 dark:bg-sky-700 hover:bg-sky-400 dark:hover:bg-sky-800 p-[2.7px]! sm:px-3! sm:py-2!"
          >
            Complete All
          </button>
          <button
            onClick={() => {
              clearCompleted();
            }}
            className="w-1/3 btn bg-sky-300 dark:bg-sky-700 hover:bg-sky-400 dark:hover:bg-sky-800 p-[2.7px]! sm:px-3! sm:py-2!"
          >
            Clear Completed
          </button>
        </div>
        {lists.map((list) => (
          <ToDoList
            key={list.id}
            id={list.id}
            toDo={list.toDo}
            isCompleted={list.isCompleted}
            toggleTask={toggleTask}
            rmTask={rmTask}
          />
        ))}
      </div>
    </>
  );
}
