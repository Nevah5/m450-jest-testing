import React from "react";
import Link from "next/link";

export const teamMembers = [
  {
    firstname: 'Julia', lastname: 'Meier', position: 'Recruiting Specialist',
    age: 29, gender: 'female'
  },
  {
    firstname: 'Michael', lastname: 'Schneider', position: 'HR Manager',
    age: 45, gender: 'male'
  },
  {
    firstname: 'Sandra', lastname: 'Müller', position: 'Talent Acquisition Lead',
    age: 38, gender: 'female'
  },
  {
    firstname: 'Tom', lastname: 'Wagner', position: 'Senior Recruiter',
    age: 33, gender: 'male'
  },
  {
    firstname: 'Anna', lastname: 'Schulz', position: 'Recruitment Coordinator',
    age: 26, gender: 'female'
  }
]

export function sum(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  )
}
