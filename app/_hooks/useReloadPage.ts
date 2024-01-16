"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const useReloadPage = () => {
  const { refresh } = useRouter()
  
  useEffect(() => {
    refresh()
  })
}

export default useReloadPage