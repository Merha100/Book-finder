import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookDetail.css";
const BookDetail = () => {
  
    const [form, setForm] = useState({
        title: '',
        author: '',
        publisheddate: '',
        image: null,
        isbn: '',
        genre:''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
   
    // make an http post request to post the 
    fetch('http://localhost:3000/books', {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
       .then((data) => {
        console.log(data);
        alert('Book updated successfully!');
        setForm({ title: '',  author: '',publisheddate: '',image : '' , isbn : '', genre: '' 
          });
      })
      .catch((error) => {
        navigate("/")
        console.error('Error:', error);
      });
    };
     
return (
    <form onSubmit={submitHandler}>
      <h2>Create Book</h2>
      <div className="formGroup" >
        <label htmlFor="title" >
          Title:
        </label>
        <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            placeholder="Name of book"
        />
      </div>
      <div className="formGroup">
        <label htmlFor="Author" >
          Author:
        </label>
        <input
          type="text"
          name="author"
          value={form.author}
          onChange={handleChange}
          required
          placeholder="Name of the author"
          
        />
      </div>
      <div className="formGroup">
        <label htmlFor="Summary" >
          PublishedDate:
        </label>
        <input
          type="text"
          name="publisheddate"
          value={form.publisheddate}
          onChange={handleChange}
          
          placeholder="Published Date"
          
        />
      </div>
        
      <div className="formGroup">
        <label htmlFor="image" >
        Image URL
        </label>
        <input
          type="text"
          name="image"
          value={form.image}
          onChange={handleChange}
          required
          
        />
      </div>
      <div className="formGroup">
        <label htmlFor="isbn" >
          ISBN:
        </label>
        <input
          type="text"
          name="isbn"
          value={form.isbn}
          onChange={handleChange}
          required
          placeholder="ISBN12"
        />
      </div>
      <div className="formGroup">
        <label htmlFor="Genre" >
          Genre:
        </label>
        <select className="Select-option"
          type="text"
          name="genre"
          value={form.genre}
          onChange={handleChange}
        >
           <option value="" disabled selected>--Please choose an option--</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">NonFiction</option>
        </select>
      </div>
 
      <button  className="submit-button" type="submit" >Submit</button>
    </form>
  );
};

export default BookDetail;
