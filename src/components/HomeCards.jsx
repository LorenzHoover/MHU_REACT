import React from 'react'
import Card from "./Card"
const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold">For Faculty</h2>
            <p className="mt-2 mb-4">
              Login and manage your courses, assignments, and exams with MYGPT
            </p>
            <a
              href="/Sign-in.html"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Sign In
            </a>
          </Card>
          <Card bg='bg-indigo-100'>
          <h2 className="text-2xl font-bold">For Students</h2>
            <p className="mt-2 mb-4">
              Login and discover the best way to study with MYGPT
            </p>
            <a
              href="/Sign-in.html"
              className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Sign In
            </a>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default HomeCards