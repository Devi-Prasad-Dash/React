import React from 'react'

function Card({username, designation, address="Hyderabad"}) {
  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mt-5">
      <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.unsplash.com/photo-1720245550369-a008c0b9375e?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width="384" height="512" />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
            “Learning React with Tailwind CSS Library”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">
            {username}
          </div>
          <div className="text-slate-700 dark:text-slate-500">
            {designation}, {address}
          </div>
        </figcaption>
      </div>
    </figure>
  )
}

export default Card