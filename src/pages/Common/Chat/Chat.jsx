import React, { useEffect, useState } from "react";
import Container from "../../../components/Container/Container";
import TextArea from "../../../components/TextArea/UploadTextArea";
import "./Chat.scss";
import service from "./../../../util/axiosConfig";
import { ROLES } from "../../../constants/roles";

const Chat = () => {
  const [conversations, setConversations] = useState([]);
  const [users, setUsers] = useState([]);
  const [userChat, setUserChat] = useState([]);
  const [inputData, setInputData] = useState({
    chat: "",
  });

  const clientId = JSON.parse(localStorage.getItem("user"))?.user?.client_id;
  const lawyerId = JSON.parse(localStorage.getItem("user"))?.user?.id;
  const userRole = JSON.parse(localStorage.getItem("user"))?.role;

  useEffect(async () => {
    try {
      if (userRole === ROLES.LAWYER) {
        const res = await service.get(`/lawyer_client/lawyer/${lawyerId}`);
        setUsers(res.data.data);
      }
    } catch (error) {}
  }, []);

  const handleUserChat = (user) => {
    console.log("ujjwal checking ", user);
  };

  const handleSendChat = () => {
    console.log("ujjwal", inputData);
  };

  return (
    <Container className="chat">
      <div className="chat_left">
        <h1 className="chat_left__heading">Chat</h1>

        <div className="chat_left__container">
          {users.map((user) => {
            return (
              <div
                className="chat_left__card"
                onClick={() => handleUserChat(user)}
              >
                {user?.client?.full_name}
              </div>
            );
          })}
        </div>
      </div>

      <div className="chat_right">
        <div className="interaction_container">
          {[...Array(40).keys()].map((interaction, index) => {
            return (
              <>
                <div
                  className={`interaction_container_image  ${
                    !interaction?.user ? "right" : ""
                  }`}
                  key={index}
                >
                  <div className="fontColor_dark image__filename">
                    interaction.comment
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <TextArea
          rows={2}
          color={"white"}
          //   value={inputData.comment}
          change={(val) => {
            console.log("ujjwal garg", val);
            setInputData({
              ...inputData,
              chat: val.text,
            });
          }}
          handleSubmit={handleSendChat}
        />
      </div>
    </Container>
  );
};

export default Chat;
