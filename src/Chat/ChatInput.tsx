import { useState } from "react";

const ChatInput = () => {
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");

  const url = "http://146.185.154.90:8000/messages";

  const postRequest = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new URLSearchParams();
    data.set("author", author);
    data.set("message", message);

    try {
      const response = await fetch(url, {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Ошибка при отправке сообщения");
      }

      setMessage("");
      setAuthor("");
      
    } catch (e) {
      console.error("Ошибка:", e);
      alert("Произошла ошибка при отправке сообщения.");
    }
  };

  return (
    <div className="row mt-5 ms-5">
      <form onSubmit={postRequest}>
        <div className="row mb-5">
          <div className="col-md-3">
            <label className="form-label">Ваше имя:</label>
            <input
              type="text"
              className="form-control"
              id="author"
              name="author"
              value={author}
              placeholder="Введите имя"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Сообщение:</label>
            <div className="d-flex">
              <input
                type="text"
                className="form-control me-2"
                id="message"
                name="message"
                value={message}
                placeholder="Введите сообщение"
                style={{ flex: 1 }}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit" className="btn btn-primary">
                Отправить
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
