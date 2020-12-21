import axios from "axios";

const apiKey = 'AIzaSyDn-3iLJ2mWz6YU4giwRbRj9GTKTOa2H3c'

export default {
  // Gets all books
  getBook: function() {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:keyes&key=${apiKey}`);
    }

  }



