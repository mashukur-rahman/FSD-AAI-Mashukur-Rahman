import { useState } from 'react'
import './App.css'
import "./index.css"
import { ArrowUpIcon } from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group"


import { Card, CardContent } from "@/components/ui/card"

import axios from "axios"

function App() {
  const [message, setMessage] = useState({
    text: "",
  })


  type chatMessage = {
    sender: string,
    message: string

  }

  const [chatHistory, setChatHistory] = useState<chatMessage[]>([])



  const handleChange = (e: any) => {
    setMessage((prev) => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }


  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setMessage(prev => ({ ...prev, text: "" }))
    setChatHistory(prev => [...prev, { sender: "user", message: message.text }])
    setChatHistory(prev => [...prev, { sender: "AI", message: "thinking..." }])
    const response = await axios.post("http://127.0.0.1:8000/chat", message)
    if (response) {
      setChatHistory(prev => {
        const updated = [...prev]
        updated[updated.length - 1] = { sender: "AI", message: response.data.message }
        return updated
      })

    } else {
      setChatHistory(prev => [...prev, { sender: "AI", message: "Error fetching the response.." }])
    }


  }




  return (



    <>
      <div className='w-[80%] border-1 border-gray-500 border-opacity-10 rounded-lg h-[90vh] relative mx-auto text-left'>
        {chatHistory.map((chats) => {
          return (<>
            <Card className={`w-full m-2 max-w-sm ${chats.sender === 'user' ? 'ml-auto' : 'mr-auto'}`}>
              <CardContent>
                {chats.message}
              </CardContent>

            </Card>
          </>)
        })}

        <div className="grid w-[90%] gap-3 absolute bottom-4 left-1/2 -translate-x-1/2">
          <form onSubmit={handleSubmit}>

            <InputGroup>
              <InputGroupTextarea placeholder="Ask, Search or Chat..." onChange={handleChange} name="text" value={message.text} />
              <InputGroupAddon align="block-end">
                <InputGroupButton
                  variant="default"
                  className="rounded-full ms-auto"
                  size="icon-xs"
                  type='submit'

                >
                  <ArrowUpIcon />

                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>

          </form>
        </div>
      </div>

    </>
  )
}

export default App
