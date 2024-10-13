const ChatForm = () => {
  return (
    <div>
      <form>
        <label>
          {" "}
          Author
          <input name="author" value="My Name" />
        </label>
        <label>
          {" "}
          Message: <input name="message" />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatForm;
