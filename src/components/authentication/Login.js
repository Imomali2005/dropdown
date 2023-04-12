import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import CenteredContainer from "./CenteredContainer"
import dropbox from "./dropbox.png";

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }
  return (
    <CenteredContainer>
      <Card>
        <Card.Body className="bg-light">
            <img className="w-100" width={50} height={340} src={dropbox} alt=""/>
          <h2 className="text-center text-success mb-4 ">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              {/* <Form.Label>Email</Form.Label> */}
              <Form.Control className="bg-light text-dark" type="email" placeholder="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Control className="bg-light text-dark" type="password" placeholder="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 bg-info" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3 ">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <div className="w-100 text-center text-danger mt-2">
            Need an account? <Link className="" to="/signup">Sign Up</Link>
          </div>
        </Card.Body>
      </Card>
      
    </CenteredContainer>
  )
}
