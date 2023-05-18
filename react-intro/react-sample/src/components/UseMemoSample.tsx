import React, { useState, useMemo } from 'react';

export const UseMemoSample = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState<string[]>([]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const onClickButton = () => {
    setItems((prevItems) => {
      return [...prevItems, text];
    });
  };

  const numberOfCharacters1 = items.reduce((sub, item) => sub + item.length, 0);
  
}