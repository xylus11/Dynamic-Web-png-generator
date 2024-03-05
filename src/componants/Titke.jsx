import React from 'react'

export default function Titke({text,classes}) {
  return <h1 className= {!classes ? "title text-center" : classes}> { !text ? "Title" :text}</h1>;
}
