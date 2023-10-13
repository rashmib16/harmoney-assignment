# Message Board Frontend

This is a simple message board frontend application built in Angular that allows users to post, view, and manage messages. It communicates with a backend API to perform these functions. Below, you'll find instructions on how to set up and run the project, as well as an overview of its features.

## Features

1. **Post a Message**: Users can post a message with a text field, and the application will provide a unique ID, the source (username), the text of the message, and a timestamp for when it was posted.

2. **List All Messages**: The application fetches and displays all messages from the API.

3. **Delete Messages**: Users can delete one or more messages. The application will prompt for confirmation before deleting all messages at a time.

4. **Sorting**: There is an option to sort messages by their associated timestamps, allowing users to see the most recent or oldest messages first.

## Prerequisites

Before running the application, ensure that you have the following dependencies installed:

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://cli.angular.io/)

## Getting Started

Follow these steps to set up and run the Message Board frontend:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/rashmib16/harmoney-assignment
   cd harmoney-assignment
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Application**:

   Start the development server:

   ```bash
   ng serve
   ```

   The application will be available at `http://localhost:4200/`.

## Usage

1. **Posting a Message**:

   - On the application's homepage, you can enter a message in the text field.
   - Click the "Post" button to send your message.

2. **Viewing Messages**:

   - Messages are displayed on the homepage in the order they were posted.
   - You can choose to sort the messages by timestamp, displaying the most recent or oldest first.

3. **Deleting Messages**:

   - To delete a message, click the delete button associated with that message.
   - The application will prompt for confirmation before deleting all messages.

4. **Sorting Messages**:

- To sort messages by timestamp, use the dropdown menu at the top of the message list.
- You can choose to sort by "Newest" or "Oldest."

## API Documentation

For detailed API endpoints and request samples, you can refer to the provided [Postman collection](https://s3.ap-south-1.amazonaws.com/harmoney.in/h/Message+Board.postman_collection.json).

## Dependencies

The project's dependencies are listed in the `package.json` file.

## Support and Issues

If you encounter any issues or have questions about this application, please feel free to reach out at rashmibajaj16@gmail.com.
