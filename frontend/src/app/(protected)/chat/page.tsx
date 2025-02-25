'use client';

import dynamic from 'next/dynamic';
import React, { useState, useRef } from 'react';

import { List, Input, Button, Typography, Divider } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import Draggable from 'react-draggable'; // Both at the same time

const { Text } = Typography;
interface Message {
  id: number;
  sender: string;
  content: string;
  isMine: boolean;
}

const ChatPage: React.FC = () => {

  // 动态加载 Live2DWidget（仅在客户端渲染）
  const Live2DWidget = dynamic(() => import('@/components/chat/Live2DWidget'), {
    ssr: false,
  });

  // 初始聊天记录（示例）
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: 'Alice', content: 'Hello there!', isMine: false },
    { id: 2, sender: 'You', content: 'Hi, Alice!', isMine: true },
  ]);

  // 文本框内容
  const [inputValue, setInputValue] = useState('');


  // 用来给 Draggable 指定 nodeRef，避免 findDOMNode
  const dragRef = useRef<HTMLDivElement>(null);

  // 发送消息
  const handleSend = () => {
    if (!inputValue.trim()) return;
    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        sender: 'You',
        content: inputValue,
        isMine: true,
      },
    ]);
    setInputValue('');
  };

  return (

    <div style={styles.container}>

      
      {/* 
        Draggable + nodeRef 用法：
        1. <Draggable nodeRef={dragRef}>
        2. 包裹一个 <div ref={dragRef}>，里面放真正要移动的组件
      */}
      <Draggable nodeRef={dragRef}>
        <div ref={dragRef} style={styles.live2dWrapper}>
          <Live2DWidget />
        </div>
      </Draggable>

      <Divider orientation="left" style={{ fontSize: '1.25rem' }}>
        Chat with Alice
      </Divider>

      {/* 消息列表 */}
      <List
        dataSource={messages}
        renderItem={(item) => {
          const bubbleStyle = item.isMine
            ? { ...styles.bubble, ...styles.bubbleMine }
            : { ...styles.bubble, ...styles.bubbleOther };
          const itemStyle = item.isMine
            ? { justifyContent: 'flex-end' }
            : { justifyContent: 'flex-start' };

          return (
            <List.Item style={{ display: 'flex', ...itemStyle }}>
              <div style={bubbleStyle}>
                <Text style={{ color: item.isMine ? '#fff' : '#000' }}>
                  {item.content}
                </Text>
              </div>
            </List.Item>
          );
        }}
      />

      {/* 输入框和发送按钮 */}
      <div style={styles.inputArea}>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onPressEnter={handleSend}
          placeholder="Enter the message..."
          style={{ marginRight: 8 }}
        />
        <Button
          type="primary"
          icon={<SendOutlined />}
          onClick={handleSend}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

// 简易内联样式
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: 800,
    margin: '0 auto',
    padding: 24,
  },
  bubble: {
    padding: '8px 12px',
    borderRadius: 16,
    maxWidth: '60%',
    wordWrap: 'break-word',
  },
  bubbleMine: {
    backgroundColor: '#1890ff',
    color: '#fff',
  },
  bubbleOther: {
    backgroundColor: '#f0f0f0',
    color: '#000',
  },
  inputArea: {
    display: 'flex',
    marginTop: 16,
  },
};

export default ChatPage;