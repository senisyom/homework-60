const ChatForm = () => {
  return (
    <div className="row m-5">
      <div className="col-md-3">
        <label htmlFor="author" className="form-label">
          Ваше имя:
        </label>
        <input
          type="text"
          className="form-control"
          id="author"
          name="author"
          value="My Name"
          readOnly
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="message" className="form-label">
          Сообщение:
        </label>
        <div className="d-flex">
          <input
            type="text"
            className="form-control me-2"
            id="message"
            name="message"
            placeholder="Введите сообщение"
            style={{ flex: 1 }}
          />
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatForm;
