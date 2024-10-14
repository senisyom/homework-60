import ChatInput from "../Chat/ChatInput";
import UserMessages from "../Chat/UserMessages/UserMessages";

const Container = () => {
  return (
    <div>
          <ChatInput />
          <hr />
          <UserMessages/>
      </div>
      
  );
};

export default Container;
