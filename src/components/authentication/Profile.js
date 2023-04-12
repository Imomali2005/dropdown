import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import CenteredContainer from "./CenteredContainer"

export default function Profile() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  async function handleLogout() {
    setError("")
    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }
  return (
    <CenteredContainer>
      <Card className="bg-light">
        <Card.Body className="text-primary">
          <h2 className="text-center text-success mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong className="text-dark">Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-info w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
        <div className="w-100 text-center mt-2 bg-warning">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
      </Card>
    
    </CenteredContainer>
  )
}
