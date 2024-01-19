import React from "react";

function Contact() {
  return (
    <div class="container mt-5 w-50">
      <h1>Contact</h1>
      <form action="https://formspree.io/f/xleqdyad" method="post">
        <div class="mb-3">
          <label for="name" class="form-label">
            Your Name
          </label>
          <input
            name="fname"
            type="text"
            class="form-control"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">
            Your Email
          </label>
          <input
            name="email"
            type="email"
            class="form-control"
            id="email"
            placeholder="email@example.com"
            required
          />
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">
            Message
          </label>
          <textarea
            class="form-control"
            id="message"
            rows="3"
            required
          ></textarea>
        </div>
        <button type="submit" class="btn btn-dark">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
