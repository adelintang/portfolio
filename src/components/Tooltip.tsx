import React from "react"

interface IconWithTooltiProps {
  title: string
  children: React.ReactNode
}

const Tooltip: React.FC<IconWithTooltiProps> = ({ title, children }) => {
  return (
    <div className="relative group flex items-center justify-center">
      {children}
      <span className="absolute bottom-6 left-1/2 transform -translate-x-1/2 scale-0 transition-all group-hover:scale-100 bg-dark text-white text-sm py-1 px-2 rounded shadow-lg whitespace-nowrap mb-1">
        {title}
      </span>
    </div>
  )
}

export default Tooltip