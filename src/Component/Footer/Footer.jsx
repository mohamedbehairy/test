import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className=" bg-slate-100 dark:bg-slate-900 dark:text-slate-50 rounded-lg text-center shadow-md">
          <div className="px-4 py-3 border-b border-blue-200 font-semibold">
            Footer
          </div>
          <div className="px-4 py-4">
            <figure>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
                <p>A well-known Footer, contained in a blockquote element.</p>
              </blockquote>
              <figcaption className="mt-2 text-sm text-gray-600">
                Someone famous in{" "}
                <cite className="font-semibold" title="Source Title">
                  Source Title
                </cite>
              </figcaption>
            </figure>
          </div>
        </div>
      </footer>
    </>
  );
}
