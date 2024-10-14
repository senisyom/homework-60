import { useState, useEffect } from "react";

interface Messages {
  message: string;
  author: string;
}

const UserMessages = () => {
  const url = "http://146.185.154.90:8000/messages";
  const dateUrl =
    "http://146.185.154.90:8000/messages?datetime=2017-12-21T10:20:39.586Z";

  const [messages, setMessages] = useState<Messages[]>([]);

  const getMessages = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
      });
      const data = await response.json();
      setMessages(data);
    } catch (e) {
      console.log(e, "Ошибка при получении сообщений");
    }
  };
  useEffect(() => {
    getMessages();

    const interval = setInterval(() => {
      getMessages();
    }, 2000);
      
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {messages.map((message, index: number) => (
        <div className="card me-5 ms-5 mb-3" key={index}>
          <div className="card-body">
            <h5 className="card-title">
              {" "}
              <strong> Пользователь: {message.author} </strong>
            </h5>
            <p className="card-text"> Отправил: {message.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default UserMessages;
