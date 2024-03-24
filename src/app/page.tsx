"use client"

import Connect from '@/components/Connect'
import { useWeb3Modal } from "@web3modal/wagmi/react"
import { useAccount, } from "wagmi"
import { useEffect } from 'react'

export default function Home() {
  const { open } = useWeb3Modal()
  const { isConnected, address } = useAccount()


  useEffect(() => {
    if (!isConnected) {
      console.log("ooen")
    } else {
      console.log(address)
    }
  }, [isConnected, open, address])

  return (
    <div>
      <Connect />
    </div>
  )
}