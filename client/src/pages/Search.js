import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Search() {
    // Setting our component's initial state
    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({})
  
    // Load all books and store them with setBooks
    useEffect(() => {
      loadBooks()
    }, [])
  
    // Loads all books and sets them to books
    function loadBooks() {
      API.getBook()
        .then(res => 
          setBooks(res.data.items)
          
        ).then =(console.log(books))
        // .catch(err => console.log(err));
    };
  
    // // Deletes a book from the database with a given id, then reloads books from the db
    // function deleteBook(id) {
    //   API.deleteBook(id)
    //     .then(res => loadBooks())
    //     .catch(err => console.log(err));
    // }
  
    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({...formObject, [name]: value})
    };
  
    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
      event.preventDefault();
      if (formObject.title && formObject.author) {
        API.saveBook({
          title: formObject.title,
          author: formObject.author,
          synopsis: formObject.synopsis
        })
          .then(res => loadBooks())
          .catch(err => console.log(err));
      }
    };
  
      return (
        <Container fluid>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1>Which author would you like to search?</h1>
              </Jumbotron>
              <form>
                <Input
                  name="author"
                  placeholder="Author (required)"
                />
                <FormBtn
                  onClick={handleFormSubmit}
                >
                  Submit Book
                </FormBtn>
              </form>
            </Col>
          </Row>
        </Container>
      );
    }
  
  
  export default Search;
  